console.log("Hello JSA-04");
// quy tắc đặt tên biến
// 1. không đc bắt đầu bằng số
// 2. không có kí hiệu đặc biệt ngoại trừ $ _: *
// 3. đặt tên biến sao cho rõ nghĩa
// let myFullName = "Phạm Đức Thiện";
// let age = 20;
// let gender = true;
// console.log(`Hello my full name is ${myFullName}, i am ${age}`);
function ageToDay(age) {
  let day = age * 365;
  return day;
}
console.log(ageToDay(20));
function remainder(a, b) {
  let result = a % b;
  return result;
  console.log(remainder(1, 3));
}
console.log(ageToDay(4));
function findPerimeter(a, b) {
  let Perimeter = (a + b) * 2;
  return Perimeter;
}
console.log(findPerimeter(1, 3));
function findPerimeter(a, b) {
  let Perimeter = (a + b) * 2;
  return Perimeter;
}
console.log(findPerimeter(1, 3));
function giveMeSomething(str) {
  return `something ${str}`;
}
console.log(giveMeSomething("Thien"));
