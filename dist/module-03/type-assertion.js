"use strict";
let emni;
emni = "Next level";
emni;
function kgToGram(param) {
    if (typeof param === "string") {
        return `${parseFloat(param) * 1000} gram`;
    }
    if (typeof param === "number") {
        return param * 1000;
    }
}
const resultToBeNumber = kgToGram(1000);
const resultToBeString = kgToGram("1000");
console.log(resultToBeNumber);
console.log(resultToBeString);
try {
}
catch (err) {
    console.log(err.message);
}
