inventory = {
  gold: 500,
  pouch: ["flint", "twint", "gemstone"],
  backpack: ["xylophone", "dagger", "bedroll", "bread loaf"],
};
inventory.pocket = ["seashell", "strange berry", "lint"];
inventory.backpack.splice(1, 1);
inventory.gold += 50;
delete inventory.pouch;
console.log(inventory);

function getBudgets(data) {
  let box = [];
  let a = 0;
  for (let i = 0; i < data.length; i++) {
    let temp = data[i];
    let budget = temp.budget;
    budget = a + budget;
    a = budget;
  }
  return a;
}
console.log(
  getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 },
  ])
);
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};
function greeting(a) {
  let key = Object.keys(GUEST_LIST);
  let temp = false;
  let value = Object.values(GUEST_LIST);
  for (let i = 0; i < key.length; i++) {
    if (a == key[i]) {
      temp = true;
      if (temp == true) {
        console.log(`\"Hi! I\'m ${a}, and I\'m from ${value[i]}.\"`);
      }
    }
  }
  if (temp == false) {
    console.log('"Hi! I\'m a guest."');
  }
}
greeting("Moti");
// code cũ
// function greeting(a) {
//   if (a == "Randy") {
//     console.log(`\"Hi! I\'m ${a}, and I\'m from ${GUEST_LIST.Randy}.\"`);
//   } else if (a == "Karla") {
//     console.log(`\"Hi! I\'m ${a}, and I\'m from ${GUEST_LIST.Karla}.\"`);
//   } else if (a == "Wendy") {
//     console.log(`\"Hi! I\'m ${a}, and I\'m from ${GUEST_LIST.Wendy}.\"`);
//   } else if (a == "Norman") {
//     console.log(`\"Hi! I\'m ${a}, and I\'m from ${GUEST_LIST.Norman}.\"`);
//   } else if (a == "Sam") {
//     console.log(`\"Hi! I\'m ${a}, and I\'m from ${GUEST_LIST.Sam}.\"`);
//   } else {
//     console.log('"Hi! I\'m a guest."');
//   }
// }
// greeting("Sam");
function keysAndValues(a) {
  let box = [];
  let key = Object.keys(a);
  let value = Object.values(a);
  box.push(key, value);
  console.log(box);
}
keysAndValues({ a: 1, b: 2, c: 3 });
function inkLevels(a) {
  let value = Object.values(a);
  let temp = value[0];
  for (let i = 0; i < value.length; i++) {
    if (temp >= value[i]) {
      temp = value[i];
    }
  }
  console.log(temp);
}
inkLevels({
  cyan: 888,
  magenta: 543,
  yellow: 777,
});
