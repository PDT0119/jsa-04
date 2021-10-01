let clothes = ["T-Shirt", "Sweater"];
function printClothes(clothes) {
  let print = "Our items: ";
  for (let i = 0; i < clothes.length; i++) {
    print += `${clothes[i]}, `;
  }
  return print;
}
function Create(clothes) {
  let New = prompt(`Enter new item:`);
  clothes.push(New);
  let print = clothes;
  return print;
}
function Delete(clothes) {
  let remove = prompt(`Delete position?`);
  clothes.splice(remove - 1, 1);
  let print = clothes;
  return print;
}
function Update(clothes) {
  let remove = prompt(`Enter position:`);
  let New = prompt(`New item`);
  clothes.splice(remove - 1, 1, `${New}`);
  let print = clothes;
  return print;
}
let input = prompt(
  "Welcome to our shop, what do you want (C, R, U, D, E (exit))?"
);
while (true) {
  if (input.toLocaleUpperCase() === "R") {
    let print = printClothes(clothes);
    console.log(print);
  } else if (input.toLocaleUpperCase() === "C") {
    let print = Create(clothes);
    console.log(print);
  } else if (input.toLocaleUpperCase() === "U") {
    let print = Update(clothes);
    console.log(print);
  } else if (input.toLocaleUpperCase() === "D") {
    let print = Delete(clothes);
    console.log(print);
  } else if (input.toLocaleUpperCase() === "E") {
    console.log("Thoát");
    break;
  } else {
    console.log("Không hợp lệ vui lòng nhập lại");
  }
  input = prompt(
    "Welcome to our shop, what do you want (C, R, U, D, E (exit))?"
  );
}
