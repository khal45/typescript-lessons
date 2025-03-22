type Food = string;
type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

let myName: string = "Khal";
let numberOfWheels: number = 4;
let isStudent: boolean = true;
let favouriteFood: Food = "pizza";

let person1: Person = {
  name: "Khal",
  age: 21,
  isStudent: true,
  address: {
    street: "SMS Lodge Street",
    city: "Minna",
    country: "Nigeria",
  },
};

let person2: Person = {
  name: "Pamilerin",
  age: 18,
  isStudent: false,
};

let people: Person[] = [person1, person2];

const displayInfo = (person) => {
  console.log(`${person.name} lives at ${person.address.street}`);
};

displayInfo(person1);

let ages: number[] = [21, 18];
