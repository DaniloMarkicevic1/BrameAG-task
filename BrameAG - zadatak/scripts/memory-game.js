let picturesTop = document.getElementsByClassName("imageContainerTop");
let picturesBottom = document.getElementsByClassName("imageContainerBottom");

for (let i = 0; i < picturesTop.length; i++) {
  picturesTop[i].addEventListener("click", () => {
    window.location.href = "/pages/quiz.html";
  });
}
for (let i = 0; i < picturesBottom.length; i++) {
  picturesBottom[i].addEventListener("click", () => {
    window.location.href = "/pages/quiz.html";
  });
}
