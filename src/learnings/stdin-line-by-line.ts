import * as readline from 'node:readline';

const input = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

for await (const line of input) {
  console.log(`Received line: ${line}`);
}
