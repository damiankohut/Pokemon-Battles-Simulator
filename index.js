//PAGE 1


//TITLE
let title = document.getElementById("title");


//TEXT ALIGN
let arrayToAlign = [title];
arrayToAlign.forEach( el => {
  el.style.textAlign = "center";
})

//RESET
function resetTitle(){
title.empty()
}