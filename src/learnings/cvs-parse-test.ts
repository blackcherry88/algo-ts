// csv.ts
import { parse } from "csv-parse";

const parser = process.stdin.pipe(
  parse({
    columns: true,        // Use the first row as object keys
    skip_empty_lines: true,
    trim: true,
  }),
);

for await (const row of parser) {
  console.log(row);
}