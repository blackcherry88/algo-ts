type RequestState<T> = 
    | { status: "idle" }
    | { status: "loading" }
    | { status: "success", data: T }
    | { status: "error"; error: Error }


function renderUsers(
    state: RequestState<string[]>
): string {
    switch (state.status) {
        case "idle":
            return "Ready";
        case "loading":
            return "Loading";
        case "success":
            return state.data.join(", ");
        case "error":
            return state.error.message;
        default:
            // must have return, uses state not state.error
            // x satisfies never is never if x is never 
            return state satisfies never;
    }
}

const state: RequestState<string[]> = {
    status: "idle"
};

const renderString = renderUsers(state);
console.log('Render string for', state, 'is ', renderString);
