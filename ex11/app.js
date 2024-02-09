var color = "purple";
document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;
color = "lightblue";
function headingColor() {
  color = "orange";
  document.querySelector(".title").style.color = color;
}

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

headingColor();
