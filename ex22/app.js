const container = document.querySelector(".container");
const button = document.querySelector(".cta-button");
const posX = document.querySelector(".posX span"); //span add karne par X show hota hai otherwise nahi hota
const posY = document.querySelector(".posY span"); //same for y show

console.log(container);
console.log(button);
console.log(posX);
console.log(posY);

//for mouse click event-

container.addEventListener("click", () => {
  button.classList.toggle("active");
  console.log("button clicked");
});

//X and Y Position

window.addEventListener("mousemove", (e) => {
  console.log(e.pageX);
  posX.innerText = e.pageX;
  posY.innerText = e.pageY;
});

//to change the color of box

container.addEventListener("mouseenter", () => {
  container.classList.add("blue");
});
container.addEventListener("mouseleave", () => {
  container.classList.remove("blue");
});
