class Test {
  constructor(i) {
    console.log("constructor execute only once. No:", i);
  }
  getBal() {
    return "Your Bal is not available";
  }
}
for (let i = 0; i <= 3; i++) {
  console.log(new Test(i).getBal());
}
