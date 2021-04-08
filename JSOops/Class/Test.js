class Bank {
  constructor() {
    console.log("Constructor method execute only once");
  }
  getBalance() {
    console.log("Your Balance Amount: 10000");
  }
}

let c1 = new Bank();
c1.getBalance();
c1.getBalance();
c1.getBalance();
