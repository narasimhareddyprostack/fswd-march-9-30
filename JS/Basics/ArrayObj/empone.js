let emp_Details = {
  name: "kavitha",
  age: 24,
  getDetails: () => {
    return emp_Details.name;
  },
};

/* console.log(emp_Details); */
// access Obj properties
/* console.log(emp_Details.name); */
console.log(emp_Details.sal());
console.log(emp_Details.getDetails());
