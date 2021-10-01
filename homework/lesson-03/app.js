// function pHName(a) {
//   if (a > 0 && a < 14) {
//     if (a < 7) {
//       return `acidic`;
//     } else if (a == 7) {
//       return `neutral`;
//     } else {
//       return `alkaline`;
//     }
//   } else {
//     return `invalid`;
//   }
// }
// console.log(pHName(14));
// function BMI(a, b) {
//   c = b / ((a / 100) * 2);
//   if (c > 0 && c < 20) {
//     console.log("normal");
//   } else {
//     console.log("underweight");
//   }
// }
// console.log(BMI(180, 55));
// function quadratic(a, b, c) {
//   let delta = b ** 2 - 4 * a * c;
//   if (delta > 0) {
//     let x1 = ((-b + Math.sqrt(delta)) / 2) * a;
//     let x2 = ((-b - Math.sqrt(delta)) / 2) * a;
//     return `${x1} and ${x2}`;
//   } else if (delta == 0) {
//     let x = (-b / 2) * a;
//     return x;
//   } else {
//     return `No-solution`;
//   }
// }
// console.log(quadratic(1, 5, 6));
// function isNarcissistic(a) {
//   let b = a % 100;
//   let g = (a - b) / 100;
//   let c = a % 10;
//   let d = (b - c) / 10;
//   let f = g ** 3 + d ** 3 + c ** 3;
//   if (f == a) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isNarcissistic(153));
function lastDig(a, b, c) {
  let d = a % 10;
  let e = b % 10;
  let f = c % 10;
  let temp = d * e;
  if (temp == f) {
    return true;
  } else {
    return false;
  }
}
console.log(lastDig(12, 21, 125));
