"use strict";
// const a : newType = "salary";
// const b : newTypeUsingKeyOf = "age";
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: "Mr. X", age: 10 }, "age");
