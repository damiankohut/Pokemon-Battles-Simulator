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
>>>>>>> fc219e5d0a880a62f3ca4b0d9af8f9a26917660f
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

document.getElementId(char1).addEventListener("click" , () => {
  haunterWasChosen()
})

function haunterWasChosen(){
  Player1 = {choice: haunter}
return `You chose ${haunter.name}`
}

function damage(){
  
}
