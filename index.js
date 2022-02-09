//PAGE 1


//TITLE
let title = document.getElementById("title");


//CONTAINER
let containerPg1 = document.getElementById("container");


//TEXT ALIGN
let arrayToAlign = [title, containerPg1];
arrayToAlign.forEach( el => {
  el.style.textAlign = "center";
})

//RESET
function resetTitle(){
$(title).empty();
}



