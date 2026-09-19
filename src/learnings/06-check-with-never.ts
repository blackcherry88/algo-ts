type shape = "circle" | "square" | "rectangle";

function handleShape(shape: shape): string {
  switch (shape) {
    case "circle":
      return "Handling a circle";
    case "square":
      return "Handling a square";
    case "rectangle":
      return "Handling a rectangle";
    default:
        return shape satisfies never; // This line ensures that all cases are handled
  }
}

console.log(handleShape("circle")); // Output: Handling a circle
console.log(handleShape("square")); // Output: Handling a square
console.log(handleShape("rectangle")); // Output: Handling a rectangle  