//PAGE 1


//TITLE
let title = document.getElementById("title");

//CONTAINER
let containerPg1 = document.getElementById("middleContainer");


//TEXT ALIGN
let arrayToAlign = [title, containerPg1];
arrayToAlign.forEach( el => {
  el.style.textAlign = "center";
})

class Pokemon {
  constructor(name, hp, faint = false, icon, player) {
    this.player = player
    this.name = name
    this.hp = hp
    this.faint = faint
    this.icon = icon
  }
//Attacks
  shadowBall(){
    name: 'Shadow Ball'
    dmg: 20
    //If Player 2 is equivalent to opposite type, deal more damage.
  }
  shadowClaw(){
    name: 'Shadow Claw'
    dmg: 15
  }
  curse(){
    name: 'Curse'
    dmg: 5
  }
  astonish(){
    name: 'Astonish'
    dmg: 15
  }
  dreamEater(){
    name: 'Dream Eater'
    dmg: 25
  }
  hyperVoice(){
    name: 'Hyper Voice'
    dmg: 15
  }
  strength(){
    name: 'Strength'
    dmg: 10
  }
  headbutt(){
    name: 'Headbutt'
    dmg: 5
  }
}
   

const jigglyPuff = new Pokemon('JigglyPuff', 200, false, "https://archives.bulbagarden.net/media/upload/6/6d/Spr_5b_093.png") 
const haunter = new Pokemon('Haunter', 200, false, "https://archives.bulbagarden.net/media/upload/f/fc/Spr_2c_039.png")




// let haunter = {
//   name: "haunter",
//   img: {
//     default: "https://archives.bulbagarden.net/media/upload/6/6d/Spr_5b_093.png"
//   },
//   hp: 100,
//   attacks: [
//     {
//       name: "shadow ball",
//       dmg: 20,
//     },
//     {
//       name: "shadow claw",
//       dmg: 15,
//     },
//     {
//       name: "curse",
//       dmg: 5,
//     },
//     {
//       name: "astonish",
//       dmg: 15,
//     }
//   ]
// };
let player1Choice = document.getElementById("player1Choice")

document.getElementById("char1").addEventListener("click" , () => {
  player1Choice.innerText = `You chose ${haunter.name}`
  
})


function damage(){
  
}
