type Coordinate = readonly [number, number];

const home: Coordinate = [0, 0];

console.log(home); // Output: [0, 0]

// Used to derive the LogLevel union below.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const levels = ["debug", "info", "warn", "error"] as const;

 // This iterates over the array and creates a union type of the string literals "debug", "info", "warn", and "error".
type LogLevel = (typeof levels)[number];

function logMessage(level: LogLevel, message: string): void {
    console.log(`[${level.toUpperCase()}] ${message}`);
}

logMessage("info", "This is an informational message."); // Output: [INFO] This is an informational message.
logMessage("error", "An error occurred!"); // Output: [ERROR] An error occurred!