type Food = { id: number; name: string; price: number };
type Staus = "orderd" | "completed";
type Order = { id: number; food: Food; status: Staus };
type Identifier = string | number;

let cashInRegister = 100;
let nextOrderId = 1;
let nextFoodId: number = 1;
const menu: Food[] = [
  { id: nextFoodId++, name: "Rice", price: 10 },
  { id: nextFoodId++, name: "Pasta", price: 8 },
  { id: nextFoodId++, name: "Sushi", price: 8 },
  { id: nextFoodId++, name: "Ramen", price: 9 },
  { id: nextFoodId++, name: "Cake", price: 32 },
];

const orderHistory: Order[] = [];

const addNewFood = (foodObj: Omit<Food, "id">): Food => {
  let newFoodObj: Food = {
    id: nextFoodId++,
    ...foodObj,
  };
  menu.push(newFoodObj);
  return newFoodObj;
};

addNewFood({ name: "Pasta", price: 8 });
addNewFood({ name: "Chicken", price: 12 });
addNewFood({ name: "Akara", price: 3 });
addNewFood({ name: "Yam", price: 7 });

const placeOrder = (foodName: string): Order | undefined => {
  const foundFoodObj = menu.find((food) => food.name === foodName);
  if (!foundFoodObj) {
    console.error(`${foodName} does not exist in the menu`);
    return;
  }
  cashInRegister += foundFoodObj.price;
  let orderObj: Order = {
    id: nextOrderId++,
    food: foundFoodObj,
    status: "orderd",
  };
  orderHistory.push(orderObj);
  return orderObj;
};

const completeOrder = (orderId: number): Order | undefined => {
  const order = orderHistory.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} was not found in the orderHistory`);
    return;
  }
  order.status = "completed";
  return order;
};

placeOrder("Akara");

completeOrder(1);

// console.log(menu);
// console.log(cashInRegister);
// console.log(orderHistory);

const getFoodDetail = (identifier: Identifier): Food | undefined => {
  if (typeof identifier === "string") {
    return menu.find(
      (food) => food.name.toLocaleLowerCase() === identifier.toLocaleLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((food) => food.id === identifier);
  } else {
    throw new TypeError(
      "Parameter `identifier` must either be a string or a number"
    );
  }
};

// console.log(getFoodDetail(1));
export {};
