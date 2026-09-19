import {parseArgs} from "node:util";

const config = {
    options: {
        file: { type: "string", short: "f", default: "default.txt" },
        force: { type: "boolean", short: "F", default: false },
    },
} as const;

const args = parseArgs({ options: config.options });

console.log("Parsed CLI arguments:", args);