class BankCutomer {
  min_Bal = 500;
  constructor(a, b) {
    this.acc_Name = a;
    this.acc_Loc = b;
    console.log("constructor executing only once");
  }
  getBal = () => {
    console.log("Your Bal is :", this.min_Bal);
    console.log(this);
  };
}

let c1 = new BankCutomer("kavitha", "Bangalore");
c1.getBal();
