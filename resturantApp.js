"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoodDetail = void 0;
var menu = [
    { id: 1, name: "Rice", price: 10 },
    { id: 2, name: "Pasta", price: 8 },
    { id: 3, name: "Sushi", price: 8 },
    { id: 4, name: "Ramen", price: 9 },
    { id: 5, name: "Cake", price: 32 },
];
var cashInRegister = 100;
var nextOrderId = 1;
var orderHistory = [];
var addNewFood = function (foodObj) {
    menu.push(foodObj);
};
var placeOrder = function (foodName) {
    var foundFoodObj = menu.find(function (food) { return food.name === foodName; });
    if (!foundFoodObj) {
        console.error("".concat(foodName, " does not exist in the menu"));
        return;
    }
    cashInRegister += foundFoodObj.price;
    var orderObj = {
        id: nextOrderId++,
        food: foundFoodObj,
        status: "orderd",
    };
    orderHistory.push(orderObj);
    return orderObj;
};
var completeOrder = function (orderId) {
    var order = orderHistory.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("".concat(orderId, " was not found in the orderHistory"));
        return;
    }
    order.status = "completed";
    return order;
};
addNewFood({ id: 5, name: "Pasta", price: 8 });
addNewFood({ id: 6, name: "Akara", price: 3 });
addNewFood({ id: 7, name: "Chicken", price: 12 });
addNewFood({ id: 8, name: "Yam", price: 7 });
placeOrder("Akara");
completeOrder(1);
console.log(menu);
console.log(cashInRegister);
console.log(orderHistory);
/**
 * Create a new utility function called getPizzaDetail
 * It will take a parameter "identifier" which can only be the string name or number id of the food
 */
var getFoodDetail = function (identifier) {
    // let foundFoodObj: Food;
    // typeof identifier === "string"
    //   ? (foundFoodObj = menu.find(
    //       (food) =>
    //         food.name.toLocaleLowerCase() === identifier.toLocaleLowerCase()
    //     ))
    //   : (foundFoodObj = menu.find((food) => food.id === identifier));
    // return foundFoodObj;
    if (typeof identifier === "string") {
        return menu.find(function (food) { return food.name.toLocaleLowerCase() === identifier.toLocaleLowerCase(); });
    }
    else if (typeof identifier === "number") {
        return menu.find(function (food) { return food.id === identifier; });
    }
};
exports.getFoodDetail = getFoodDetail;
console.log(getFoodDetail(1));
