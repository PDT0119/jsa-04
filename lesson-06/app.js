let arr = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];
let newArr = [];
for (var i of arr) {
  if (i.age >= 20) {
    newArr.push(i);
  }
}
console.log(newArr);
let nums = [1, 3, 7, -9, 5, 10, 15, 4];
let ans = nums.filter((a) => a % 2 == 0);
console.log(ans);
