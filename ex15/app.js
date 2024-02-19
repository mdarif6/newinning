// Func Declaration

function doSomeMath(a, b) {
  let c = a + b;
  return c;
}

console.log("Result of doSomeMathc is :", doSomeMath(6, 5));

//Fucn Expression
const doMoreMath = function (a, b) {
  let c = a * b;
  return c;
};
console.log("Result of doMoreMath is :", doMoreMath, "and ", doMoreMath(4, 9));

//IIFE - immediate invoked function expression

(function () {
  let a = 9;
  let b = 45;
  let c = doSomeMath(a, b);
  console.log(`IIFE Result is: , ${c}`);
})();

//Standard Function
// const greenPack = {
//   name: "Frog Pack",
//   color: "green",
//   volume: "8",
//   pocketNum: "3",
// };

// const addPack = function (currentPack) {
//   const newArticle = document.createElement("article");
//   newArticle.innerHTML = `
//     <h1>${currentPack.name}</h1>
//     <ul>
//     <li>Volume: ${currentPack.volume}</li>
//     <li>Color${currentPack.color}</li>
//     <li>No. of Pocket: ${currentPack.pocketNum}</li>
//     </ul>

//     `;
//   return newArticle;
// };

// const main = document.querySelector("main");
// main.append(addPack(greenPack));

//convert into arrow function
const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: "8",
  pocketNum: "3",
};

const addPack = (currentPack) => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
    <li>Volume: ${currentPack.volume}</li>
    <li>Color${currentPack.color}</li>
    <li>No. of Pocket: ${currentPack.pocketNum}</li>
    </ul>

    `;
  return newArticle;
};

const main = document.querySelector("main");
main.append(addPack(greenPack));
