//JIGGLYPUFF
let jigglypuff = {
  name: "jigglypuff",
  img: {
    default: "https://archives.bulbagarden.net/media/upload/f/fc/Spr_2c_039.png"
  },
  hp: 100,
  attacks: [
    {
      name: "drean eater",
      dmg: 25,
    },
    {
      name: "hyper voice",
      dmg: 15,
    },
    {
      name: "strength",
      dmg: 10,
    },
    {
      name: "headbutt",
      dmg: 5,
    }
  ]
};


//PLAYER 2 CHOICE
//THIS NEEDS TO BE MADE INTO A CLASS OR SOMETHING SIMIALR TO MAKE IT DYNAMIC?
let player2Choice = document.getElementById("player2Choice")

document.getElementById("char2").addEventListener("click" , () => {
  player2Choice.innerText = `You chose ${jigglypuff.name}`
})

//PAGE 2 GO TO PAGE 3
let button2 = document.createElement("button");
document.getElementById("container2").appendChild(button2);
button2.addEventListener("click", () => {
  document.getElementById("container2").style.display = "none";
  // document.getElementById("testing last page").style.display = "block";

})


//page 3
/*
if health === 0 {
  go to third page
  display winner
}
*/
