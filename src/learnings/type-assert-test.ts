type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;

type Expect<T extends true> = T;

// Implementation
type UppercaseKeys<T> = {
  [K in keyof T as K extends string ? Uppercase<K> : K]: T[K];
};

// Type-Level Test Cases
type TestInput = { name: string; age: number };
type ExpectedOutput = { NAME: string; AGE: number };

// ✅ PASSES: Compiles with no errors
type Test_Success = Expect<Equal<UppercaseKeys<TestInput>, ExpectedOutput>>;

const x: Test_Success = true; // This line is just to avoid unused variable warning
console.log(`x is ${x}`);

// ❌ FAILS: Intentionally failing test to prove type safety
// Compiler Error: Type 'false' does not satisfy the constraint 'true'
// type Test_Failure = Expect<Equal<UppercaseKeys<TestInput>, { name: string }>>;

interface User {
  id: string;
  role: 'admin' | 'user';
  email: string;
}

const buildUser = (overrides?: Partial<User>): User => ({
  id: 'usr_123',
  role: 'user',
  email: 'test@example.com',
  ...overrides,
});

// Test Case
const adminUser = buildUser({ role: 'admin' });
console.log(adminUser); // Output: { id: '
