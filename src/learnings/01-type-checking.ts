function double(value: number): number {
  return value * 2;
}

const i = "5"
// const result = double(i); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
const result = double(Number(i)); // Convert string "5" to number and double it   
console.log(`double ${i} is : ${result}`); // Output: Double of 5 is: 10