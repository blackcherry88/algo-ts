type SignupForm = {
    username: string;
    email: string;
    age: number;
};

type FormErrors<T> = {
    [K in keyof T]?: string;
};

type SignupErrors = FormErrors<SignupForm>;

const signupErrors: SignupErrors = {
    username: "not valid user name",
}

console.log('Sign up error', signupErrors);

type Mutable<T> = {
    -readonly [K in keyof T]: T[K];
};

type User = {
    readonly username: string;
    email: string; 
};

type MutableUser = Mutable<User>;

const mutableUser: MutableUser = {
    username: "Somebody",
    email: "somebody@gmail.com",
}

console.log('user info', mutableUser);


export {};