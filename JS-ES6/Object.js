let person = {
  firstName: "Pooja",
  lastName: "Rai",
  age: 28,

  func: () => {
    return this;
  },
};

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
let message = person.func();
console.log(message);
