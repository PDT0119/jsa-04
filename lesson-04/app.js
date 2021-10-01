let nums = [1, 2, 5, 7, 9, -10];
function maxNum() {
  let a = nums.length;
  let b = nums[0];
  for (i = 0; i < a; i++) {
    if (nums[i] > b) {
      let b = nums[i];
    }
    console.log(b);
  }
}
maxNum(nums);
// let nums = [1, -2, -4, 2, -10, 5, 9];
// function soAm() {
//   let a = nums.length;
//   let ans = [];
//   for (i = 0; i < a; i++) {
//     if (nums[i] < 0) {
//       ans.push(nums[i]);
//     }
//   }
//   console.log(ans);
// }
// console.log(soAm(nums));
