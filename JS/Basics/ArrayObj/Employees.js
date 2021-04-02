//let employees = [{}, {}, 1, 2, "Hello"];
let employees = [
  { name: "kavitha", age: 24, loc: "Bangalore" },
  { name: "Ravi", age: 25, loc: "Chennai" },
  { name: "Kumar", age: 26, loc: "Hyderabad" },
  { name: "Raj", age: 28, loc: "Kochi" },
  { name: "Rohini", age: 34, loc: "Mysore" },
  { name: "Karan", age: 45, loc: "Tirupathi" },
  { name: "Iswaar", age: 34, loc: "Bangalore" },
];
/* console.log(employees); */

for (emp of employees) {
  if (emp["loc"] == "Bangalore") {
    console.log(emp);
  }
}
