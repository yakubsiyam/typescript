"use strict";
function findDuplicate(array1, array2) {
    return array1.filter((value) => array2.includes(value));
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 4, 6, 8];
console.log(findDuplicate(array1, array2));
