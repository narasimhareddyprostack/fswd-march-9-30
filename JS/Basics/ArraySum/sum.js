//WAP to print sum of array
/*
    initlizatin : let i = 0
    condition  : i< = array.length -1
    incr/decr   i++
*/
/* let number = [10, 20, 30, 40];
let i = 0;
let sum = 0;
while (i <= number.length - 1) {
  sum = sum + number[i];
  i++;
}

console.log(sum); */

let number = [10, 20, 30, 40];
let sum = 0;

for (value of number) {
  sum = sum + value;
}

console.log(sum);
