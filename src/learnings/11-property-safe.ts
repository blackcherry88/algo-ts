function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const user = {
  id: 123,
  name: 'Ada',
  active: true,
};

const userName = getProperty(user, 'name');
// getProperty(user, "email"); // error

console.log(`${user.name}'s name is ${userName}`);

export {};
