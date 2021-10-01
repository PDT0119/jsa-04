// let message = `Hãy nhập 1 tháng trong năm`;
// let ex = `Đây là mùa`;
// let thang = prompt(message);
// if (thang <= 0 || thang >= 13) {
//   console.log(`tháng ${thang} không hợp lệ`);
// } else if (thang < 4) {
//   console.log(`${ex} Xuân`);
// } else if (thang < 7) {
//   console.log(`${ex} Hạ`);
// } else if (thang < 10) {
//   console.log(`${ex} Thu`);
// } else {
//   console.log(`${ex} Đông`);
// }
// function special2digits(a) {
//   let second_num = a % 10;
//   let first_num = a / 10;
//   if (first_num + second_num + first_num * second_num == a) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(special2digits(19));
let a = 0;
let b = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 == 0) {
    a += i;
  } else {
    b += i;
  }
}
console.log(a);
console.log(b);
