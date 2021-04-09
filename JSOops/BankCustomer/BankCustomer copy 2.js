class BankCutomer {
  min_Bal = 500;
  constructor(a, b) {
    this.acc_Name = a;
    this.acc_Loc = b;
    console.log("constructor executing only once");
  }
  get_Balance() {
    console.log("Your Balance is:", this.min_Bal);
  }
}

let c1 = new BankCutomer("kavitha", "Bangalore");
c1.get_Balance();
c1.get_Balance();
c1.get_Balance();
c1.get_Balance();
c1.get_Balance();
c1.get_Balance();
