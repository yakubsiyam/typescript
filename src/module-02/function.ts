// normal function

function add(num1: number, num2: number):number {
    return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1+ num2;
// console.log(add(2, 2));

const arr = [1, 4, 5];

const newArray = arr.map((elem: number) => elem * elem);

const person: {
    name: string,
    balance: number,
    addBalance(money: number):number
} = {
    name: "Siyam",
    balance: 5,
    addBalance(money:number) {
        return this.balance + money;
    }
}

// spread operator
// const myFriends:string[] = ["abul", "babul", "khabul"];
// const newFriends:string[] = ["jalil", "bappa", "alam"];
// myFriends.push(...newFriends);
// console.log(myFriends);

//rest parameter

const greetFriends = (...friends: string[]):void => {
    friends.forEach(friend => console.log(`Hi ${friend}`));
}

greetFriends("kashem", "hashjem", "gashem", "bangla", "jhankar");

// destructuring
const myFriends:string[] = ["abul", "babul", "khabul"];
const newFriends:string[] = ["jalil", "bappa", "alam"];

const bestFriend =  {
    fullName: "Abul",
    age: 24
};

const [bestfriend] = myFriends;
const {fullName} = bestFriend;
console.log(fullName);



