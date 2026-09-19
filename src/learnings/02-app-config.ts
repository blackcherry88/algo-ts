interface AppOptions {
  host: string;
  port: number;
  ssl: boolean;
  timeoutMs: number;
}

const DEFAULT_OPTIONS: AppOptions = {
  host: 'localhost',
  port: 8080,
  ssl: false,
  timeoutMs: 5000,
};

function loadConfig(overrides: Partial<AppOptions> = {}): Readonly<AppOptions> {
  return Object.freeze({
    ...DEFAULT_OPTIONS,
    ...overrides,
  });
}

// Usage Example
const customConfig = loadConfig({ port: 443, ssl: true });
console.log(customConfig.host); // Inferred cleanly as string
