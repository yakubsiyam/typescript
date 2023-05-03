"use strict";
// normal function
function add(num1, num2) {
    return num1 + num2;
}
const addArrow = (num1, num2) => num1 + num2;
console.log(add(2, 2));
const arr = [1, 4, 5];
const newArray = arr.map((elem) => elem * elem);
const person = {
    name: "Siyam",
    balance: 5,
    addBalance(money) {
        return this.balance + money;
    }
};
