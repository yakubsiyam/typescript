"use strict";
// normal function
function add(num1, num2) {
    return num1 + num2;
}
const addArrow = (num1, num2) => num1 + num2;
// console.log(add(2, 2));
const arr = [1, 4, 5];
const newArray = arr.map((elem) => elem * elem);
const person = {
    name: "Siyam",
    balance: 5,
    addBalance(money) {
        return this.balance + money;
    }
};
// spread operator
// const myFriends:string[] = ["abul", "babul", "khabul"];
// const newFriends:string[] = ["jalil", "bappa", "alam"];
// myFriends.push(...newFriends);
// console.log(myFriends);
//rest parameter
const greetFriends = (...friends) => {
    friends.forEach(friend => console.log(`Hi ${friend}`));
};
greetFriends("kashem", "hashjem", "gashem", "bangla", "jhankar");
// destructuring
const myFriends = ["abul", "babul", "khabul"];
const newFriends = ["jalil", "bappa", "alam"];
const bestFriend = {
    fullName: "Abul",
    age: 24
};
const [bestfriend] = myFriends;
const { fullName } = bestFriend;
console.log(fullName);
