let userDetails = { email: "greetlabs@gmail.com", password: "124abc" };

let newPassword = "T2021@rtt";

let updatedUserDetails = { ...userDetails, password: newPassword };

console.log(userDetails);
console.log(updatedUserDetails);
