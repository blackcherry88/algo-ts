type MyEvent =
  { type: 'LOGIN'; userId: string } | { type: 'LOGOUT'; userId: string };

function handleEvent(event: MyEvent): string {
  switch (event.type) {
    case 'LOGIN':
      return `User ${event.userId} logged in`;
    case 'LOGOUT':
      return `User ${event.userId} logged out`;
    default: {
      // TypeScript error if a new Event type is added without a case
      const _exhaustiveCheck: never = event;
      return _exhaustiveCheck;
    }
  }
}

const r = handleEvent({ type: 'LOGIN', userId: '123' });
console.log(r); // Output: User 123 logged in
