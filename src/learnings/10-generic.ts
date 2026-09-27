function first<T>(value: T[]): T | undefined {
  return value[0];
}

const numbers = [1, 2, 3];
const firstNumber = first(numbers); // Type is number | undefined
console.log(firstNumber); // Output: 1

const strings = ['a', 'b', 'c'];
const firstString = first(strings); // Type is string | undefined
console.log(firstString); // Output: 'a'

const emptyArray: number[] = [];
const firstEmpty = first(emptyArray); // Type is number | undefined
console.log(firstEmpty); // Output: undefined