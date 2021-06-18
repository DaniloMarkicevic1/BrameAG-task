let quizPageButton = document.getElementsByClassName("quizPageButton");

for (let i = 0; i < quizPageButton.length; i++) {
  quizPageButton[i].addEventListener("click", () => {
    window.location.href = "../pages/swipe.html";
  });
}
