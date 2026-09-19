import * as readline from 'node:readline';

const input = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

let headers: string[] | undefined;

for await (const line of input) {
  if (line.trim() === '') {
    continue; // Skip empty lines
  }

  const columns = line.split(',').map((col) => col.trim());

  if (!headers) {
    headers = columns; // First non-empty line is the header
    continue;
  }

  const row: Record<string, string> = {};
  headers.forEach((header, index) => {
    row[header] = columns[index] ?? '';
  });
  console.log(row);
}
