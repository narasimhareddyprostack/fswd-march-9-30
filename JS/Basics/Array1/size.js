let shirt_Size = ["S", "M", "L", 46];
//indexing         0    1   2      3
console.log(shirt_Size.length);
//how to iterate array

for (let i = 0; i <= shirt_Size.length - 1; i++) {
  console.log(shirt_Size[i]);
}
console.log("-------------------");
for (size of shirt_Size) {
  console.log(size);
}
