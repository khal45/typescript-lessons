const menu = [
  { name: "Pasta", price: 8 },
  { name: "Rice", price: 10 },
  { name: "Sushi", price: 8 },
  { name: "Ramen", price: 9 },
  { name: "Cake", price: 32 },
];

const cashInRegister = 100;
const nextOrderId = 1;
const orderQue = [];
const addNewFood = (foodObj) => {
  menu.push(foodObj);
};

const placeOrder = (foodName) => {
  const foundFoodObj = menu.find((food) => food.name === foodName);
  cashInRegister += foundFoodObj.price;
  let orderObj = {
    id: nextOrderId++,
    food: foundFoodObj.name,
    status: "orderd",
  };
  orderQue.push(orderObj);
  return orderObj;
};

const completeOrder = (orderId) => {
  const order = orderQue.find((order) => order.id === orderId);
  order.status = "completed";
  return order;
};

addNewFood({ name: "Pasta", price: 8 });
addNewFood({ name: "Akara", price: 3 });
addNewFood({ name: "Chicken", price: 12 });
addNewFood({ name: "Yam", price: 7 });

placeOrder("Akara");

completeOrder("1");

console.log(menu);
console.log(cashInRegister);
console.log(orderQue);
