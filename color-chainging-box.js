var colorBox = document.getElementById("color-box");

colorBox.addEventListener("click", changeColor);

function changeColor() {
  var randomColor = getRandomColor();
  colorBox.style.backgroundColor = randomColor;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
