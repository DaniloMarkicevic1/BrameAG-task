
let startButton = document.getElementById("startButton");
let submitResultsButton = document.getElementById("submitResultsButton");

// From Starting page to Memory Game page
startButton.addEventListener("click", () => {
  window.location.href = "/pages/memory-game.html"
});



// From Registration page to Results page

submitResultsButton.addEventListener("click", () => {
  registrationPage.style.display = "none";
  resultsPage.style.display = "inline";
})


