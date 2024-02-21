const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const nestedObjects = {
  item01: {
    name: "piggy",
    type: "toy",
    weight: 30,
  },
  item02: {
    name: "headlamp",
    type: "equipment",
    weight: 120,
  },
  item03: {
    name: "pen",
    type: "tool",
    weight: 30,
  },
  item04: {
    name: "pencil",
    type: "tool",
    weight: 30,
  },
  item05: {
    name: "eraser",
    type: "tool",
    weight: 40,
  },
  item03: {
    name: "water bottle",
    type: "equipment",
    weight: 1300,
  },
};

const article = document.querySelector("article");
let stuffList = document.createElement("ul");

/**
 * for loop

 */

// for (let i = 0; i < stuff.length; i++) {
//   let item = document.createElement("li");
//   item.innerHTML = stuff[i];
//   stuffList.append(item);
// }

/**
 * for...of loop and arrays

 */

// for (const item of stuff) {
//   let list = document.createElement("li");
//   list.innerHTML = item;
//   stuffList.append(list);
// }

/**
 * foreach array method
 */

// stuff.forEach((item) => {
//   const itemList = document.createElement("li");
//   itemList.innerHTML = item;
//   stuffList.append(itemList);
// });

/**
 * for...in loop and objects
 */

for (const singleObject in nestedObjects) {
  const listItem = document.createElement("li");
  listItem.innerHTML = nestedObjects[singleObject].name;
  stuffList.append(listItem);
}

article.append(stuffList);
