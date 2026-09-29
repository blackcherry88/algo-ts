type User = {
    id: string;
    name: string;
};

type Timestamped = {
    createdAt: Date;
    updatedAt: Date;
};

type StoredUser = User & Timestamped;

const user = {
    id: "u1",
    name: "Grace",
    createdAt: new Date(),
    updatedAt: new Date(),
};

console.log('user is ', user, ' but its type after erase is', typeof user);