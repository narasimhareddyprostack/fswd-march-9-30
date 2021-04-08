class Bank {
  min_Bal = 500;
  constructor(a) {
    this.acc_Name = a;
  }
}
let c1 = new Bank("Nayak");
console.log(c1);
console.log(c1.acc_Name);

let c2 = new Bank("Sai");
console.log(c2);
