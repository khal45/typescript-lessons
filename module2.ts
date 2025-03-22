import { error } from "console";

type UserRole = "guest" | "member" | "admin" | "contributor";

type User = {
  id: number;
  username: string;
  role: UserRole;
};

type UpdatedUser = Partial<User>;

let nextUserId: number = 1;
const users: User[] = [
  { id: nextUserId++, username: "khal", role: "admin" },
  { id: nextUserId++, username: "john", role: "member" },
  { id: nextUserId++, username: "dayo", role: "member" },
];

const fetchUserDetails = (username: string): User => {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User ${username} not found!`);
  }
  return user;
};

const updateUser = (id: number, updates: UpdatedUser) => {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    throw new error("User not found!");
  }

  Object.assign(foundUser, updates);
};

const addNewUser = (newUser: Omit<User, "id">): User => {
  let user: User = { id: nextUserId++, ...newUser };
  users.push(user);
  return user;
};

addNewUser({ username: "daniel", role: "contributor" });

const gameScores = [14, 21, 33, 42, 59];
const favouriteThings = ["anime", "manga", "web3"];
const voters = [
  { name: "Khal", age: 21 },
  { name: "Deborah", age: 18 },
];

const getLastItem = <Type>(array: Type[]): Type => {
  return array[array.length - 1];
};

const getFirstItem = <Type>(array: Type[]): Type => {
  return array[0];
};

console.log(getFirstItem(gameScores));
console.log(getFirstItem(favouriteThings));
console.log(getFirstItem(voters));

export {};
