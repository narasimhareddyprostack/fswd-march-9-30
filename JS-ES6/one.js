let Employee = {
  a: 100,
  getDetails: function () {
    console.log(this);
  },
};

console.log(Employee.a);
Employee.getDetails();
