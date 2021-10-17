// const members = [
//     { name: 'Lan', gender: 'female' },
//     { name: 'Linh', gender: 'female' },
//     { name: 'Trung', gender: 'male' },
//     { name: 'Peter', gender: 'gay' }
//      ];
// function filterOutFemales(){
//     let box = [];
//     for (let people of members) {
//         if (people.gender != 'female'){
//             box.push(people);
//         }
//     }
//     console.log(box)
// }
// filterOutFemales(members)
// function diffArray(arr1, arr2) {
//   var newArr = [];
//   if (arr1.length > arr2.length) {
//     var bigarr = [].concat(arr1);
//     var smaarr = [].concat(arr2);
//   } else {
//     var bigarr = [].concat(arr2);
//     var smaarr = [].concat(arr1);
//   }
//   for (let i = 0; i < bigarr.length; i++) {
//     for (let a = 0; a < smaarr.length; a++) {
//       if (bigarr[i] == smaarr[a]) {
//         break
//       } else {
//         newArr.push(bigarr[i])
//       }
//     }
//   }
//   return newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//code sai
// function diffArray(arr1,arr2) {
// let difference = arr1
//                  .filter(x => !arr2.includes(x))
//                  .concat(arr2.filter(x => !arr1.includes(x)));
//                  return difference
// }
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// function sumMinimums(arr) {
//   let sum = 0;
//   for (let i = 0;i<arr.lenght;i++){
//     let min =Number.MAX_VALUE;
//     for (let a = 0; i < arr[i].lenght; a++) {
//       if (arr[i][a] <= min) {
//         min = arr[i][a];
//       }
//     }
//     sum += min
//   }
//   return sum;
// }
// console.log(sumMinimums([
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [20, 21, 34, 56, 100]]
// ))
function freeShipping(items) {
  let sum = 0
let key = Object.keys(items)
for (let i = 0; i < key.length; i++) {
    sum += items[key[i]]
  }
  if (sum >= 50){
    return true;
  } else {
    return false;
  }
}
console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }))
