type ElementOf<T> = 
    T extends readonly (infer Item)[]
        ? Item
        : T

type A = ElementOf<string[]>;

const element: A = 'Hello';

console.log('element of string[] is', element);

type FunctionResult<T> = 
    T extends (...args: never[]) => infer R
        ? R
        : never;

function add(x: number, y: number) {
    return x + y;
}

const x = 2;
const y = 3;

const z: FunctionResult<typeof add> = add(x, y);

console.log(`add ${x} and ${y} is ${z}`);

export {};