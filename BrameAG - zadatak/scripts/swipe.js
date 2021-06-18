let answerButtons = document.getElementsByClassName("answerButtons");
let arrowButtons = document.getElementsByClassName("arrowButtons");

// From swipePage to registrationPage
for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", () => {
    window.location.href = "../pages/registration.html";
  });
}
for (let i = 0; i < arrowButtons.length; i++) {
  arrowButtons[i].addEventListener("click", () => {
    window.location.href = "../pages/registration.html";
  });
}
