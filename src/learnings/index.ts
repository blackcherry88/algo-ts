const name = process.argv[2];
await import(`./${name}.ts`);
export {};
