let button = document.createElement("button");
document.getElementById("container").appendChild(button);
button.addEventListener("click", () => {
  document.getElementById("container").style.display = "none";
})