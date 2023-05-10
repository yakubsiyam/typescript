"use strict";
// Arrow Function
const createArray = (param) => {
    return [param];
};
// single param
const createArray1 = (param) => {
    return [param];
};
// multiple param
const createArray2 = (param1, param2) => {
    return [param1, param2];
};
function createArray3(param1, param2) {
    return [param1, param2];
}
const result1 = createArray1("Bangladesh");
const result2 = createArray1(true);
const result3 = createArray1({ name: "Bangladesh" });
const result4 = createArray2(false, ["USA"]);
// Spread Operator
const addMeInMyCrushMind = (myInfo) => {
    const crush5 = "Kate Winslet";
    const newData = Object.assign(Object.assign({}, myInfo), { crush5 });
    return newData;
};
const myInfo = {
    name: "Siyam",
    age: 24,
    salary: 1000000,
};
const result6 = addMeInMyCrushMind(myInfo);
