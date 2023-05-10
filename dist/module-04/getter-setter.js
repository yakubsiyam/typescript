"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getTestBalance() {
        return this._balance;
    }
    get Test() {
        return this.getTestBalance();
    }
    // getter
    get balance() {
        return this._balance;
    }
    //setter
    set deposit(amount) {
        this._balance += amount;
    }
}
class StudentAccount extends BankAccount {
    test() {
        this.id;
        this.Test;
    }
}
const myAccount = new BankAccount(1, "Siyam", 20);
// myAccount._balance = 0;
//   console.log(myAccount.addDeposit(10));
//   console.log(myAccount);
myAccount.deposit = 30;
console.log(myAccount.balance);
