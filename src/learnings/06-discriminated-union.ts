type AsyncDataState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T; fetchedAt: Date }
  | { status: "error"; error: Error };

function renderUI<T>(state: AsyncDataState<T>, renderData: (data: T) => string): string {
  switch (state.status) {
    case "idle":
      return "Press button to start";
    case "loading":
      return "Loading data...";
    case "success":
      return `Loaded at ${state.fetchedAt.toISOString()}: ${renderData(state.data)}`;
    case "error":
      return `Failed: ${state.error.message}`;
  }
}

// Usage Example
const currentState: AsyncDataState<string[]> = {
  status: "success",
  data: ["Item 1", "Item 2"],
  fetchedAt: new Date(),
};
console.log(renderUI(currentState, (items) => items.join(", ")));