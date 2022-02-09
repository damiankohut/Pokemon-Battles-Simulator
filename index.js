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
>>>>>>> 4f65361f191999be9093b6b8ca1c3b2cc548d170
