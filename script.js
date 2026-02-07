const btn = document.getElementById("loveBtn");
const hiddenImg = document.getElementById("hiddenImg");

let tries = 0;

function moveButton() {
  if (tries < 2) {
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 70 + "%";
    btn.style.top = Math.random() * 70 + "%";
  }
}

btn.addEventListener("mouseenter", moveButton);

btn.addEventListener("click", () => {
  tries++;
  if (tries < 2) {
    moveButton();
  } else {
    btn.style.display = "none";
    hiddenImg.style.display = "block";
  }
});
