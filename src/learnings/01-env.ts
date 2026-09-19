interface EnvConfig {
  nodeEnv: "development" | "production" | "test";
  port: number;
  dbUrl: string;
}

function validateEnv(env: Record<string, string | undefined>): EnvConfig {
  const nodeEnv = env.NODE_ENV;
  if (nodeEnv !== "development" && nodeEnv !== "production" && nodeEnv !== "test") {
    throw new Error("Invalid or missing NODE_ENV");
  }

  const rawPort = env.PORT ?? "3000";
  const port = parseInt(rawPort, 10);
  if (isNaN(port) || port <= 0) {
    throw new Error(`Invalid PORT number: ${rawPort}`);
  }

  const dbUrl = env.DATABASE_URL;
  if (!dbUrl) {
    throw new Error("Missing required DATABASE_URL environment variable");
  }

  return { nodeEnv, port, dbUrl };
}

// Usage Example
const config = validateEnv(process.env);
console.log(`Running in ${config.nodeEnv} on port ${config.port}`);
