// stdin.ts
process.stdin.setEncoding("utf8");

process.stdin
    .on("data", (chunk: string) => {
    console.log("Received:", chunk);
    })
    .on("end", () => {
    console.log("Input stream ended.");
    })
    .on("error", (error) => {
    console.error(" stdin error:", error);
    process.exitCode = 1;
    });
