"use strict";
const sumEvenNum = (num) => {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            sum += num[i];
        }
    }
    return sum;
};
const num = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNum(num));
