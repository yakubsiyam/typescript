class BankAccount {
  public id: number;
  public name: string;
  private _balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  // getter
  get balance(): number {
    return this._balance;
  }

  //setter

  set deposit(amount: number) {
    this._balance += amount;
  }
  //   getBalance(): number {
  //     return this._balance;
  //   }

  //   addDeposit(amount: number) {
  //     this._balance = this._balance + amount;
  //   }
}

class StudentAccount extends BankAccount {
  test() {
    this.id;
  }
}

const myAccount = new BankAccount(1, "Siyam", 20);
// myAccount._balance = 0;
//   console.log(myAccount.addDeposit(10));
//   console.log(myAccount);
myAccount.deposit = 30;
console.log(myAccount.balance);
