const color = "purple";
document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;
color = "lightblue";
function headingColor() {
  let titleColor = "orange";
  document.querySelector(".title").style.color = titleColor;
  console.log("inside Color : ", titleColor);
}

headingColor();

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
