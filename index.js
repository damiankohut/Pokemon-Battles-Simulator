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
title.empty()
}

let haunter = {
  name: "haunter",
  img: {
    default: ""
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
