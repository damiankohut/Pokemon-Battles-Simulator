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
<<<<<<< HEAD
=======

>>>>>>> 9350a44fd86c73228f846089b976f995ec6098a7
let haunter = {
  name: "haunter",
  img: {
    default: "https://archives.bulbagarden.net/media/upload/6/6d/Spr_5b_093.png"
  },
  hp: 100,
  attacks: [
    {
      name: "shadow ball",
      dmg: 20,
    },
    {
      name: "shadow claw",
      dmg: 15,
    },
    {
      name: "curse",
      dmg: 5,
    },
    {
      name: "astonish",
      dmg: 15,
    }
  ]
};
let player1Choice = document.getElementById("player1Choice")

document.getElementById("char1").addEventListener("click" , () => {
  player1Choice.innerText = `You chose ${haunter.name}`

})



function damage(){
  
}
