function getProperty<T, K extends keyof T>(
    object: T,
    key: K
): T[K] {
    return object[key];
}

const user = {
    id: 123,
    name: "Ada",
    active: true,
};

const name = getProperty(user, "name");

console.log(`${user}'s name is ${name}`);

const users = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
const names = pluck(users, 'name'); // string[], inferred

console.log('extract names', names, 'from', users);

export {};
