let btn = document.querySelector(".button");
let canvas = document.querySelector("#canvas");
document.body.appendChild(document.createElement("p"));
document.querySelector("p").textContent = "Click faster for Surprise";

function getRandomColor() {
  let value = "0123456789ABCDEF";
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    colorCode += value[Math.floor(Math.random() * 16)];
  }
  return colorCode;
}

function addColor() {
  canvas.style.background = getRandomColor();
  canvas.textContent = `Background color is ${getRandomColor()}`;
}

function addGif() {
  addColor();
  let img = document.createElement("img");
  canvas.appendChild(img);
  document
    .querySelector("img")
    .setAttribute(
      "src",
      "https://media.giphy.com/media/x5lIgu2DDtI5IzdtUg/giphy.gif"
    );
}
document.querySelector(".reload").addEventListener("click", () => {
  location.reload();
});

btn.addEventListener("click", changeColor);
var lastClicked = 0;
function changeColor() {
  var timeNow = new Date().getTime();
  if (timeNow > lastClicked + 300) {
    lastClicked = timeNow;
    return addColor();
  } else {
    lastClicked = timeNow;
    return addGif();
  }
}
