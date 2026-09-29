interface Named {
  name: string;
}

type Employee = Named & {
  employeeId: number;
};

function greet(person: Named): string {
  return `Hello, ${person.name}!`;
}

const employee: Employee = {
  name: 'Alice',
  employeeId: 12345,
};

console.log(greet(employee)); // Output: Hello, Alice!

export {};
