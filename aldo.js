// let button = document.createElement("button");
// document.getElementById("container").appendChild(button);

let startGame = document.querySelector("#start")

startGame.addEventListener("click", () => {
  document.querySelector("#middleContainer").style.display = "none"
  document.getElementById("page1").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("startbutton").style.display = "none";
  document.getElementById("title").style.display = "none";
  document.getElementById("movesets").style.display = 'block';
// document.getElementById("winner-message").style.display = 'block';  this is for PAGE 3
})