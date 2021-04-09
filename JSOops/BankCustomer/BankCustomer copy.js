class BankCutomer {
  min_Bal = 500;
  constructor(a, b) {
    this.acc_Name = a;
    this.acc_Loc = b;
  }
}

let c1 = new BankCutomer("kavitha", "Bangalore");
console.log(c1);

let c2 = new BankCutomer("Mahesh", "Chennai");
console.log(c2);
