"use strict";
const crush1 = {
    name: "moina",
    age: 22,
    profession: "Web Developer",
    address: "Moner Vitor",
};
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
};
console.log(calculate(10, 20, (x, y) => x + y));
