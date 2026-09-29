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


function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map(item => item[key]);
}

const users = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
const names = pluck(users, 'name'); // string[], inferred

console.log('extract names', names, 'from', users);

export {};
