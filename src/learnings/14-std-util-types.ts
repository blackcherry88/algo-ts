// Standard library utility types, each paired with a value that uses it so the
// derived shape is visible at runtime instead of only in the editor.

type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  nickname?: string;
};

function createUser(name: string, email: string) {
  return {
    id: crypto.randomUUID(),
    name,
    email,
  };
}

// --- Partial / Required / Readonly: flip optionality and mutability ---

// Partial<T> makes every property optional; combined with Pick it describes a
// patch that may touch only the editable fields.
type UserUpdate = Partial<Pick<User, 'name' | 'email'>>;

const userUpdate: UserUpdate = { name: 'Hello' };

// Required<T> removes `?`, so `nickname` must now be supplied.
type FullUser = Required<User>;

const fullUser: FullUser = {
  id: 'u1',
  name: 'Ada',
  email: 'ada@example.com',
  passwordHash: 'hash',
  nickname: 'ada',
};

// Readonly<T> is shallow: the properties are frozen for the type checker, but
// nested objects stay mutable and nothing is frozen at runtime.
type FrozenUser = Readonly<User>;

const frozenUser: FrozenUser = fullUser;
// frozenUser.name = 'Grace'; // Cannot assign to 'name' because it is read-only

console.log('partial update', userUpdate);
console.log('required user', fullUser);
console.log('readonly view still reads fine', frozenUser.name);

// --- Pick / Omit / Record: select, drop, and index ---

type PublicUser = Omit<User, 'passwordHash'>;
type Credentials = Pick<User, 'email' | 'passwordHash'>;

// Record<K, V> builds an object type from a key type and a value type. Using
// `User['id']` (string) as the key keeps the intent readable even though it is
// just `string` after erasure.
type UserById = Record<User['id'], PublicUser>;

const publicUser: PublicUser = {
  id: 'u1',
  name: 'Ada',
  email: 'ada@example.com',
};

const credentials: Credentials = {
  email: 'ada@example.com',
  passwordHash: 'hash',
};

const userById: UserById = { [publicUser.id]: publicUser };

console.log('public user', publicUser);
console.log('credentials', credentials);
console.log('indexed by user id u1', userById.u1);

// --- Exclude / Extract / NonNullable: filter union members ---

type Role = 'admin' | 'editor' | 'viewer' | 'banned';

// Exclude removes matching members, Extract keeps them.
type ActiveRole = Exclude<Role, 'banned'>;
type PrivilegedRole = Extract<Role, 'admin' | 'editor'>;

const activeRoles: ActiveRole[] = ['admin', 'editor', 'viewer'];
const privileged: PrivilegedRole = 'admin';

// NonNullable strips null and undefined, which is what a guard proves at runtime.
type MaybeName = string | null | undefined;
type DefiniteName = NonNullable<MaybeName>;

function requireName(value: MaybeName): DefiniteName {
  if (value == null) throw new Error('name is required');
  return value;
}

console.log('active roles', activeRoles, 'privileged', privileged);
console.log('required name', requireName('Ada'));

// --- Parameters / ReturnType: read a function's own types ---

// Both take `typeof fn`, not the function itself: they operate on the type.
type CreateUserArgs = Parameters<typeof createUser>;
type CreatedUser = ReturnType<typeof createUser>;

// A tuple type, so it spreads straight back into the call.
const args: CreateUserArgs = ['Ada', 'ada@example.com'];
const created: CreatedUser = createUser(...args);

console.log('created from tuple args', args, 'returns', created);

// --- Awaited: unwrap promises ---

async function fetchUser(id: string): Promise<PublicUser> {
  return { id, name: 'Ada', email: 'ada@example.com' };
}

// ReturnType alone gives Promise<PublicUser>; Awaited unwraps it (recursively,
// so nested promises collapse too).
// type FetchedUser = Awaited<ReturnType<typeof fetchUser>>;

const fetched = await fetchUser('u2');

console.log('awaited result', fetched);

export {};
