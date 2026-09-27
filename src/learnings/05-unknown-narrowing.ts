function getErrorMessage(error: unknown): string {
    if (error == null) {
        return "An empty error message.";
    }
    if (error instanceof Error) {
        return error.message;
    }
    if (typeof error === "string") {
        return error;  
    }
    if (typeof error === "object" && "message" in error) {
        return (error as { message: string }).message;
    }
    return "An unknown error occurred.";
}


console.log(getErrorMessage(undefined)); // Output: "An empty error message."
console.log(getErrorMessage("This is a string error.")); // Output: "This is a string error."
console.log(getErrorMessage(new Error("This is an error."))); // Output: "This is an error."