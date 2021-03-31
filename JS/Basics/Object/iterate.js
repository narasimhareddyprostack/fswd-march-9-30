let employee = { name: "Kavitha", age: 24, loc: "Chennai", sal: 50000 };

//print Object employee , values

/* console.log(employee.name);
console.log(employee.age);
console.log(employee.loc); */

for (key in employee) {
  console.log(employee[key]);
}
