const bcrypt = require("bcryptjs");

let userDetails = { email: "greetlabs@gmail.com", password: "124abc" };

let salt = bcrypt.genSaltSync(10);
console.log(salt);

let newPassword = bcrypt.hashSync(userDetails.password, salt);
console.log(newPassword);
let updated_User = { ...userDetails, password: newPassword };
console.log(updated_User);

if (bcrypt.compareSync("124abc", updated_User.password)) {
  console.log("Login success");
} else {
  console.log("Login failure");
}
