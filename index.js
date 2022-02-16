document.getElementById("page2").style.display="none"
var theme = document.getElementById("theme");
theme.volume = 0.010;
//Bugs: 
//1. If health bar negative, the health bar should be empty when winning
//2. Animations done, MAYBE better sound effects // missing = a dodge?
//3. Blindspot: Consider a "draw" scenario
//4. Feature: trainer name, level up for each pokemon if they win (remembers matches)
//5. fix legendary code
//6. Finish attack names/states, fix images, maybe types feature
//CSS Border for Characters: border: 2px dotted purple;

//Styling for Selection Screen

//Character Selection
let currPlayer = 'Player1' 
//Start Button Disabled
document.getElementById("startButton").disabled=true;
var missed = false;



//PAGE 1
//Empty Player 1 Object--Dependent on Pokemon Class
const player1 = {
  name: null,
  pokemon: null,
  move1: null,
  move2: null,
  move3: null,
  move4: null,
  hp: null,
  //Convert Attack Function Names to Strings
  }
//Empty Player 2 Object--Dependent on Pokemon Class
  const player2 = {
  name: null,
  pokemon: null,
  move1: null,
  move2: null,
  move3: null,
  move4: null,
  hp: null
  }


//Do not initially display movesets or winner message
document.getElementById("movesets").style.display = 'none';
document.getElementById("winner-message").style.display = 'none';

//Start of Damian's OG Healthbar
// let health2 = document.getElementById("health2")
// let health1 = document.getElementById("health1")

//ResetHealth Function--used for every StartGame
  function resetHealth(){
    // health1.max = 200
    // health2.max =200
    // let health2 = document.getElementById("health2")
    // let health1 = document.getElementById("health1")
    player1.hp=player1.pokemon.hp
    player2.hp=player2.pokemon.hp
    unoplayer = player1.hp
   dosplayer = player2.hp
   veigHP.style.width = 200 + "px";
   megaManHP.style.width = 200 + "px";
// if (  document.getElementById('print').innerHTML === "Game Over") {
//   veigHP.style.widthh = 200
// }
}
    

//Start of Damian's TurnofPlayer 
let turnOfPlayer = 1

//ChangeOfTurn Function
function changeOfTurn(){
  if (turnOfPlayer === 1){
    document.getElementById('print')
        .innerHTML = "Trainer 1 Turn";
        
}
else if (turnOfPlayer === 2){
    document.getElementById('print')
        .innerHTML = "Trainer 2 Turn";
}
else {
  document.getElementById('print')
    .innerHTML = "Game Over"
}
}




// let button = document.createElement("button");
// document.getElementById("container").appendChild(button);
//keeping track of turns below
//let player1Turn = true


//PLAYER 1 STARTS FIRST, PLAYER 2 MOVESETS DISABLED.
document.getElementById("moveset5").disabled = true
document.getElementById("moveset6").disabled = true
document.getElementById("moveset7").disabled = true
document.getElementById("moveset8").disabled = true

//GRABBING HTML ELEMENTS
//TITLE
let title = document.getElementById("title");
//CONTAINER
let containerPg1 = document.getElementById("middleContainer");
//TEXT ALIGN (AUTOMATICALLY ALIGN TITLE AND CONTAINERS)
let arrayToAlign = [title, containerPg1];
arrayToAlign.forEach( el => {
  el.style.textAlign = "center";
})

//POKEMON CLASS
class Pokemon {
  constructor(name, hp, icon, backIcon, player, moves= {moves:  ["","","",""] 
}) {
    this.player = player
    this.name = name
    this.hp = hp
    this.icon = icon
    this.backIcon = backIcon
this.moves = moves 
  }





//ATTACK LIBRARY
//Damian's Attack Functions are now methods

//Player 1 Haunter 

//Doesn't affect original healtbar

iceBeam(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

aquaJet(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
      let dmg = Math.round(Math.random()*10)+30
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed.";  missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

hydroPump(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 7){
    missed = false;
      let dmg = Math.round(Math.random()*10)+25
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  } } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}
bite(){
  let hitChance = Math.round(Math.random()*10)
  if (hitChance <= 10){
    missed = false;
      let dmg = Math.round(Math.random()*10)+10
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  } } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

iceBeam2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 3){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}


aquaJet2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = true;
      let dmg = Math.round(Math.random()*10)+30
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
  let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
    megaManHP.style.width = megaManHPBarWidth + "px"
    turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}

hydroPump2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 7){
    missed = false;
      let dmg = Math.round(Math.random()*10)+25
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}


bite2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 10){
    missed = false;
      let dmg = Math.round(Math.random()*10)+20
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}



shadowball(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

astonish(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
      let dmg = Math.round(Math.random()*10)+30
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed.";  missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

shadowsneak(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 7){
    missed = false;
      let dmg = Math.round(Math.random()*10)+25
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  } } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}
shadowclaw(){
  let hitChance = Math.round(Math.random()*10)
  if (hitChance <= 10){
    missed = false;
      let dmg = Math.round(Math.random()*10)+10
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  } } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}
// ==========================================================
dragontail(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 3){
    let dmg = Math.round(Math.random()*10)+35
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 2
  }
  changeOfTurn()
}

outrage(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
      let dmg = Math.round(Math.random()*10)+30
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 2
  }
  changeOfTurn()
}

crunch(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 7){
      let dmg = Math.round(Math.random()*10)+25
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  } } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 2
  }
  changeOfTurn()
}

earthquake(){
  let hitChance = Math.round(Math.random()*10)
  if (hitChance <= 10){
      let dmg = Math.round(Math.random()*10)+10
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  } } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 2
  }
  changeOfTurn()
}

dragontail2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 3){
    let dmg = Math.round(Math.random()*10)+35
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 1
  }
  changeOfTurn()
}
outrage2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
      let dmg = Math.round(Math.random()*10)+30
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 1
  }
  changeOfTurn()
}
crunch2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 7){
      let dmg = Math.round(Math.random()*10)+25
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 1
  }
  changeOfTurn()
}
earthquake2(){
  let hitChance = Math.round(Math.random()*10)
  if (hitChance <= 10){
      let dmg = Math.round(Math.random()*10)+10
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 1
  }
  changeOfTurn()
}

FireFang(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 3){
    let dmg = Math.round(Math.random()*10)+35
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 2
  }
  changeOfTurn()
}

fireblast(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
      let dmg = Math.round(Math.random()*10)+30
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 2
  }
  changeOfTurn()
}

flamethrower(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 7){
      let dmg = Math.round(Math.random()*10)+25
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  } } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 2
  }
  changeOfTurn()
}
wildcharge(){
  let hitChance = Math.round(Math.random()*10)
  if (hitChance <= 10){
      let dmg = Math.round(Math.random()*10)+10
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  } } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 2
  }
  changeOfTurn()
}

FireFang2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 3){
    let dmg = Math.round(Math.random()*10)+35
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 1
  }
  changeOfTurn()
}
fireblast2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
      let dmg = Math.round(Math.random()*10)+30
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 1
  }
  changeOfTurn()
}
flamethrower2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 7){
      let dmg = Math.round(Math.random()*10)+25
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 1
  }
  changeOfTurn()
}
wildcharge2(){
  let hitChance = Math.round(Math.random()*10)
  if (hitChance <= 10){
      let dmg = Math.round(Math.random()*10)+10
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 1
  }
  changeOfTurn()
}

thunderweb(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 3){
    let dmg = Math.round(Math.random()*10)+35
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 2
  }
  changeOfTurn()
}

thundershock(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
      let dmg = Math.round(Math.random()*10)+30
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 2
  }
  changeOfTurn()
}

irontail(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 7){
      let dmg = Math.round(Math.random()*10)+25
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  } } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 2
  }
  changeOfTurn()
}
quickattack(){
  let hitChance = Math.round(Math.random()*10)
  if (hitChance <= 10){
      let dmg = Math.round(Math.random()*10)+10
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  } } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 2
  }
  changeOfTurn()
}

thunderweb2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 3){
    let dmg = Math.round(Math.random()*10)+35
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 1
  }
  changeOfTurn()
}
thundershock2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
      let dmg = Math.round(Math.random()*10)+30
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 1
  }
  changeOfTurn()
}
irontail2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 7){
      let dmg = Math.round(Math.random()*10)+25
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 1
  }
  changeOfTurn()
}
quickattack2(){
  let hitChance = Math.round(Math.random()*10)
  if (hitChance <= 10){
      let dmg = Math.round(Math.random()*10)+10
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."
turnOfPlayer = 1
  }
  changeOfTurn()
}

confusion(){
    let hitChance = Math.round(Math.random()*15)
    if (hitChance <= 3){
      let dmg = Math.round(Math.random()*10)+35
    player1.hp -= dmg
    unoplayer = player1.hp;
    bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
  let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
    megaManHP.style.width = megaManHPBarWidth + "px"
    turnOfPlayer = 1
    if (unoplayer < 0){
        unoplayer = 0
    }
    } else {
  bottomRow.innerHTML = "You have missed."
  turnOfPlayer = 1
    }
    changeOfTurn()
  }
  psychic(){
    let hitChance = Math.round(Math.random()*15)
    if (hitChance <= 5){
        let dmg = Math.round(Math.random()*10)+30
    player1.hp -= dmg
    unoplayer = player1.hp;
    bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
  let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
    megaManHP.style.width = megaManHPBarWidth + "px"
    turnOfPlayer = 1
    if (unoplayer < 0){
        unoplayer = 0
    }
    } else {
  bottomRow.innerHTML = "You have missed."
  turnOfPlayer = 1
    }
    changeOfTurn()
  }
  futuresight(){
    let hitChance = Math.round(Math.random()*15)
    if (hitChance <= 7){
        let dmg = Math.round(Math.random()*10)+25
    player1.hp -= dmg
    unoplayer = player1.hp;
    bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
  let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
    megaManHP.style.width = megaManHPBarWidth + "px"
    turnOfPlayer = 1
    if (unoplayer < 0){
        unoplayer = 0
    }
    } else {
  bottomRow.innerHTML = "You have missed."
  turnOfPlayer = 1
    }
    changeOfTurn()
  }
  Mindfreak(){
    let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 15){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

  confusion2(){
    let hitChance = Math.round(Math.random()*15)
    if (hitChance <= 3){
      let dmg = Math.round(Math.random()*10)+35
    player1.hp -= dmg
    unoplayer = player1.hp;
    bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
  let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
    megaManHP.style.width = megaManHPBarWidth + "px"
    turnOfPlayer = 1
    if (unoplayer < 0){
        unoplayer = 0
    }
    } else {
  bottomRow.innerHTML = "You have missed."
  turnOfPlayer = 1
    }
    changeOfTurn()
  }
  psychic2(){
    let hitChance = Math.round(Math.random()*15)
    if (hitChance <= 5){
        let dmg = Math.round(Math.random()*10)+30
    player1.hp -= dmg
    unoplayer = player1.hp;
    bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
  let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
    megaManHP.style.width = megaManHPBarWidth + "px"
    turnOfPlayer = 1
    if (unoplayer < 0){
        unoplayer = 0
    }
    } else {
  bottomRow.innerHTML = "You have missed."
  turnOfPlayer = 1
    }
    changeOfTurn()
  }
  futuresight2(){
    let hitChance = Math.round(Math.random()*15)
    if (hitChance <= 7){
        let dmg = Math.round(Math.random()*10)+25
    player1.hp -= dmg
    unoplayer = player1.hp;
    bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
  let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
    megaManHP.style.width = megaManHPBarWidth + "px"
    turnOfPlayer = 1
    if (unoplayer < 0){
        unoplayer = 0
    }
    } else {
  bottomRow.innerHTML = "You have missed."
  turnOfPlayer = 1
    }
    changeOfTurn()
  }
  Mindfreak2(){
    let hitChance = Math.round(Math.random()*10)
    if (hitChance <= 10){
        let dmg = Math.round(Math.random()*10)+10
    player1.hp -= dmg
    unoplayer = player1.hp;
    bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
  let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
    megaManHP.style.width = megaManHPBarWidth + "px"
    turnOfPlayer = 1
    if (unoplayer < 0){
        unoplayer = 0
    }
    } else {
  bottomRow.innerHTML = "You have missed."
  turnOfPlayer = 1
    }
    changeOfTurn()
  }


  thunderweb(){
    let hitChance = Math.round(Math.random()*15)
    if (hitChance <= 3){
      let dmg = Math.round(Math.random()*10)+35
    player2.hp -= dmg
    dosplayer = player2.hp
    bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
    let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
      veigHP.style.width = veigHPBarWidth + "px"
      turnOfPlayer = 2
    if (dosplayer < 0){
        dosplayer = 0
    }} else {
  bottomRow.innerHTML = "You have missed."
  turnOfPlayer = 2
    }
    changeOfTurn()
  }
  
  thundershock(){
    let hitChance = Math.round(Math.random()*15)
    if (hitChance <= 5){
        let dmg = Math.round(Math.random()*10)+30
    player2.hp -= dmg
    dosplayer = player2.hp
    bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
    let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
      veigHP.style.width = veigHPBarWidth + "px"
      turnOfPlayer = 2
    if (dosplayer < 0){
        dosplayer = 0
    }} else {
  bottomRow.innerHTML = "You have missed."
  turnOfPlayer = 2
    }
    changeOfTurn()
  }
  
  irontail(){
    let hitChance = Math.round(Math.random()*15)
    if (hitChance <= 7){
        let dmg = Math.round(Math.random()*10)+25
    player2.hp -= dmg
    dosplayer = player2.hp
    bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
    let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
      veigHP.style.width = veigHPBarWidth + "px"
      turnOfPlayer = 2
    if (dosplayer < 0){
        dosplayer = 0
    } } else {
  bottomRow.innerHTML = "You have missed."
  turnOfPlayer = 2
    }
    changeOfTurn()
  }
  quickattack(){
    let hitChance = Math.round(Math.random()*10)
    if (hitChance <= 10){
        let dmg = Math.round(Math.random()*10)+10
    player2.hp -= dmg
    dosplayer = player2.hp
    bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
    let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
      veigHP.style.width = veigHPBarWidth + "px"
      turnOfPlayer = 2
    if (dosplayer < 0){
        dosplayer = 0
    } } else {
  bottomRow.innerHTML = "You have missed."
  turnOfPlayer = 2
    }
    changeOfTurn()
  }
  
    thunderweb2(){
      let hitChance = Math.round(Math.random()*15)
      if (hitChance <= 3){
        let dmg = Math.round(Math.random()*10)+35
      player1.hp -= dmg
      unoplayer = player1.hp;
      bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
    let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
      megaManHP.style.width = megaManHPBarWidth + "px"
      turnOfPlayer = 1
      if (unoplayer < 0){
          unoplayer = 0
      }
      } else {
    bottomRow.innerHTML = "You have missed."
    turnOfPlayer = 1
      }
      changeOfTurn()
    }
    thundershock2(){
      let hitChance = Math.round(Math.random()*15)
      if (hitChance <= 5){
          let dmg = Math.round(Math.random()*10)+30
      player1.hp -= dmg
      unoplayer = player1.hp;
      bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
    let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
      megaManHP.style.width = megaManHPBarWidth + "px"
      turnOfPlayer = 1
      if (unoplayer < 0){
          unoplayer = 0
      }
      } else {
    bottomRow.innerHTML = "You have missed."
    turnOfPlayer = 1
      }
      changeOfTurn()
    }
    irontail2(){
      let hitChance = Math.round(Math.random()*15)
      if (hitChance <= 7){
          let dmg = Math.round(Math.random()*10)+25
      player1.hp -= dmg
      unoplayer = player1.hp;
      bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
    let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
      megaManHP.style.width = megaManHPBarWidth + "px"
      turnOfPlayer = 1
      if (unoplayer < 0){
          unoplayer = 0
      }
      } else {
    bottomRow.innerHTML = "You have missed."
    turnOfPlayer = 1
      }
      changeOfTurn()
    }
    quickattack2(){
      let hitChance = Math.round(Math.random()*10)
      if (hitChance <= 10){
          let dmg = Math.round(Math.random()*10)+10
      player1.hp -= dmg
      unoplayer = player1.hp;
      bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
    let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
      megaManHP.style.width = megaManHPBarWidth + "px"
      turnOfPlayer = 1
      if (unoplayer < 0){
          unoplayer = 0
      }
      } else {
    bottomRow.innerHTML = "You have missed."
    turnOfPlayer = 1
      }
      changeOfTurn()
    }


    ancientpower(){
      let hitChance = Math.round(Math.random()*15)
      if (hitChance <= 3){
        let dmg = Math.round(Math.random()*10)+35
      player2.hp -= dmg
      dosplayer = player2.hp
      bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
      let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
        veigHP.style.width = veigHPBarWidth + "px"
        turnOfPlayer = 2
      if (dosplayer < 0){
          dosplayer = 0
      }} else {
    bottomRow.innerHTML = "You have missed."
    turnOfPlayer = 2
      }
      changeOfTurn()
    }
    
    headsmash(){
      let hitChance = Math.round(Math.random()*15)
      if (hitChance <= 5){
          let dmg = Math.round(Math.random()*10)+30
      player2.hp -= dmg
      dosplayer = player2.hp
      bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
      let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
        veigHP.style.width = veigHPBarWidth + "px"
        turnOfPlayer = 2
      if (dosplayer < 0){
          dosplayer = 0
      }} else {
    bottomRow.innerHTML = "You have missed."
    turnOfPlayer = 2
      }
      changeOfTurn()
    }
    
    meteorbeam(){
      let hitChance = Math.round(Math.random()*15)
      if (hitChance <= 7){
          let dmg = Math.round(Math.random()*10)+25
      player2.hp -= dmg
      dosplayer = player2.hp
      bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
      let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
        veigHP.style.width = veigHPBarWidth + "px"
        turnOfPlayer = 2
      if (dosplayer < 0){
          dosplayer = 0
      } } else {
    bottomRow.innerHTML = "You have missed."
    turnOfPlayer = 2
      }
      changeOfTurn()
    }
    smackdown(){
      let hitChance = Math.round(Math.random()*10)
      if (hitChance <= 10){
          let dmg = Math.round(Math.random()*10)+10
      player2.hp -= dmg
      dosplayer = player2.hp
      bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
      let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
        veigHP.style.width = veigHPBarWidth + "px"
        turnOfPlayer = 2
      if (dosplayer < 0){
          dosplayer = 0
      } } else {
    bottomRow.innerHTML = "You have missed."
    turnOfPlayer = 2
      }
      changeOfTurn()
    }
    
    ancientpower2(){
        let hitChance = Math.round(Math.random()*15)
        if (hitChance <= 3){
          let dmg = Math.round(Math.random()*10)+35
        player1.hp -= dmg
        unoplayer = player1.hp;
        bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
      let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
        megaManHP.style.width = megaManHPBarWidth + "px"
        turnOfPlayer = 1
        if (unoplayer < 0){
            unoplayer = 0
        }
        } else {
      bottomRow.innerHTML = "You have missed."
      turnOfPlayer = 1
        }
        changeOfTurn()
      }
      headsmash2(){
        let hitChance = Math.round(Math.random()*15)
        if (hitChance <= 5){
            let dmg = Math.round(Math.random()*10)+30
        player1.hp -= dmg
        unoplayer = player1.hp;
        bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
      let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
        megaManHP.style.width = megaManHPBarWidth + "px"
        turnOfPlayer = 1
        if (unoplayer < 0){
            unoplayer = 0
        }
        } else {
      bottomRow.innerHTML = "You have missed."
      turnOfPlayer = 1
        }
        changeOfTurn()
      }
      meteorbeam2(){
        let hitChance = Math.round(Math.random()*15)
        if (hitChance <= 7){
            let dmg = Math.round(Math.random()*10)+25
        player1.hp -= dmg
        unoplayer = player1.hp;
        bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
      let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
        megaManHP.style.width = megaManHPBarWidth + "px"
        turnOfPlayer = 1
        if (unoplayer < 0){
            unoplayer = 0
        }
        } else {
      bottomRow.innerHTML = "You have missed."
      turnOfPlayer = 1
        }
        changeOfTurn()
      }
      smackdown2(){
        let hitChance = Math.round(Math.random()*10)
        if (hitChance <= 10){
            let dmg = Math.round(Math.random()*10)+10
        player1.hp -= dmg
        unoplayer = player1.hp;
        bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
      let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
        megaManHP.style.width = megaManHPBarWidth + "px"
        turnOfPlayer = 1
        if (unoplayer < 0){
            unoplayer = 0
        }
        } else {
      bottomRow.innerHTML = "You have missed."
      turnOfPlayer = 1
        }
        changeOfTurn()
      }
// =================================================
//Player 1 JigglyPuff 
sing(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 3){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

strength(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
      missed = false;
      let dmg = Math.round(Math.random()*10)+30
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

smack(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 7){
    missed = false;
    let dmg = Math.round(Math.random()*10)+25
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  } } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

bonk(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 10){
    missed = false;
      let dmg = Math.round(Math.random()*10)+20
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  } } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

shadowball2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 3){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}


astonish2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = true;
      let dmg = Math.round(Math.random()*10)+30
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
  let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
    megaManHP.style.width = megaManHPBarWidth + "px"
    turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}

shadowsneak2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 7){
    missed = false;
      let dmg = Math.round(Math.random()*10)+25
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}


shadowclaw2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 10){
    missed = false;
      let dmg = Math.round(Math.random()*10)+20
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}

//Player 2 JigglyPuff
sing2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 3){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}


strength2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
      let dmg = Math.round(Math.random()*10)+30
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}

smack2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 7){
    missed = false;
      let dmg = Math.round(Math.random()*10)+25
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}


bonk2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 10){
    missed = false;
      let dmg = Math.round(Math.random()*10)+20
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}

bulletseed(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

bulletseed2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}

razorleaf(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

razorleaf2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}

petalblizzard(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

petalblizzard2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}

solarbeam(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

solarbeam2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}

weatherball(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

weatherball2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}

thunderbolt(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

thunderbolt2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}

thunder(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+70
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

thunder2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+70
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}

snarl(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player2.hp -= dmg
  dosplayer = player2.hp
  bottomRow.innerHTML = "You hit " + player2.name + " with " + dmg + " damage. " + player2.name + " now has " + dosplayer + " HP left."
  let veigHPBarWidth = (dosplayer/player2.hp)*player2.hp;
    veigHP.style.width = veigHPBarWidth + "px"
    turnOfPlayer = 2
  if (dosplayer < 0){
      dosplayer = 0
  }} else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 2
  }
  changeOfTurn()
}

snarl2(){
  let hitChance = Math.round(Math.random()*15)
  if (hitChance <= 5){
    missed = false;
    let dmg = Math.round(Math.random()*10)+35
  player1.hp -= dmg
  unoplayer = player1.hp;
  bottomRow.innerHTML = "You hit " + player1.name + " with " + dmg + " damage. " + player1.name + " now has " + unoplayer + " HP left."
let megaManHPBarWidth = (unoplayer/player1.hp)*player1.hp;
  megaManHP.style.width = megaManHPBarWidth + "px"
  turnOfPlayer = 1
  if (unoplayer < 0){
      unoplayer = 0
  }
  } else {
bottomRow.innerHTML = "You have missed."; missed = true;
turnOfPlayer = 1
  }
  changeOfTurn()
}

}


//GRABBING MOVESET IDS
//Damians code --------------------------------------
let moveset1 = document.getElementById("moveset1")
let moveset2 = document.getElementById("moveset2")
let moveset3 = document.getElementById("moveset3")
let moveset4 = document.getElementById("moveset4")

//Invisble Reset Button - Revealed when Game Ends
let reset = document.createElement("button")
reset.classList.add("reset")
document.getElementById("page2").appendChild(reset)
reset.style.display = "none"
//reset.disabled=true

 
//CHARACTER SELECTION
//Damians Code -----------------------------------------------


function wartortleSelect()  {
  if (currPlayer === 'Player1') {
  player1Choice.innerText = `Trainer 1 chose ${wartortle.name}`
  //Starter properties for player 1 object
  player1.pokemon=wartortle
  player1.player='Player1'
  player1.name = player1.pokemon.name
  player1.hp=player1.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player1.move1=player1.pokemon.iceBeam
  player1.move2=player1.pokemon.aquaJet
  player1.move3=player1.pokemon.hydroPump
  player1.move4=player1.pokemon.bite
  //Append Choice to Player Selection
  let p1Icon = document.createElement('img')
  p1Icon.src = player1.pokemon.icon;
  p1Icon.className = "leftSelectionChar"
  document.querySelector("#leftContainer").appendChild(p1Icon)
  //Display Fighter in Page2
  let fieldFighter1 = document.createElement('img')
  fieldFighter1.className = "battleIcons1";
  fieldFighter1.src = player1.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter1)
  //Player 2 Select Mode
  player2Choice.innerText = `Player 2 Select`
  currPlayer = 'Player2'

//Sound Effects
var sound = new Audio();         // create the audio
sound.src = "sounds/hitHurt.wav";  // set the resource location 
sound.oncanplaythrough = function(){   // When the sound has completely loaded
    sound.readyToRock = true;    // flag sound is ready to play
                                 // I just made it up and can be anything
};
sound.onerror = function(){      // not required but if there are problems this will help debug the problem
    console.log("Sound file hitHurt.wav failed to load.")
};

function playSound(){
  if(sound && sound.readyToRock){  // check for the sound and if it has loaded
    sound.volume = 0.050;
    sound.currentTime = 0;       // seek to the start
      sound.play();                // play it till it ends
  }
}

  //Pain Function

//Pain features --->
function p1Pain(){
  let p1Damage = document.getElementsByClassName("battleIcons1")
    p1Damage[0].classList.add("pain")
    playSound()
    // const animation = document.querySelector('p.animation');
    // animation.addEventListener('animationend', () => {
    //   p1Damage[0].classList.remove('active');
    // });
}

//4. Fix missed animation--Pokemon shouldnt flinch when attack misses
//5. Add sound effects----check (individual ones for each pok
//Animation Work: For Pain
document.body.addEventListener('animationend', () => {

  let p1Damage = document.getElementsByClassName("battleIcons1")
  p1Damage[0].classList.remove("pain")
  let p2Damage = document.getElementsByClassName("battleIcons2")
  p2Damage[0].classList.remove("pain")
}
)

function p2Pain(){
  let p2Damage = document.getElementsByClassName("battleIcons2")
    p2Damage[0].classList.add("pain")
    playSound()
}
  //EVENT LISTENERS FOR ALL MOVES
  document.getElementById("moveset1").addEventListener("click", () =>{
  
    player1.move1()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset2").addEventListener("click", () =>{
    //astonish()
    player1.move2()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset3").addEventListener("click", () =>{
    //shadowsneak()
    player1.move3()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset4").addEventListener("click", () =>{
    player1.move4()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset5").addEventListener("click", () =>{
    player2.move1()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset6").addEventListener("click", () =>{
    player2.move2()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset7").addEventListener("click", () =>{
    player2.move3()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset8").addEventListener("click", () =>{
    player2.move4()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  //end of damians code===============================================
  }
  if (currPlayer === 'Player2' && player1.pokemon!=wartortle) {
  player2Choice.innerText = `Trainer 2 chose ${wartortle.name}`
  //Player 2 starter properties
  player2.player = 'Player2'
  player2.pokemon = wartortle
  player2.name = player2.pokemon.name
  player2.hp=player2.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player2.move1=player2.pokemon.iceBeam2
  player2.move2=player2.pokemon.aquaJet2
  player2.move3=player2.pokemon.hydroPump2
  player2.move4=player2.pokemon.bite2
  //Append fighter to selection screen
  var p2Icon = document.createElement('img')
  p2Icon.src = player2.pokemon.icon;
  p2Icon.className = "rightSelectionChar"
  document.querySelector("#rightContainer").appendChild(p2Icon)
  //Display fighter in Page2
  let fieldFighter2 = document.createElement('img')
  fieldFighter2.className = "battleIcons2";
  fieldFighter2.src = player2.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter2)
  currPlayer = null 
  ////Sets player selection to null until the next stage of game, prevents appending infinite Pokemon images
  }
  if (player1.pokemon === null || player2.pokemon === null) {
    document.getElementById("startButton").disabled=true;
  } else {
  //Start Game is ENABLED
  //Action Buttons inherit their names from player 1 and player

// convert()
  
  
    document.getElementById("startButton").disabled=false;}
}

//Box 1: Haunter
function haunterSelect()  {
  if (currPlayer === 'Player1') {
  player1Choice.innerText = `Trainer 1 chose ${haunter.name}`
  //Starter properties for player 1 object
  player1.pokemon=haunter
  player1.player='Player1'
  player1.name = player1.pokemon.name
  player1.hp=player1.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player1.move1=player1.pokemon.shadowball
  player1.move2=player1.pokemon.astonish
  player1.move3=player1.pokemon.shadowsneak
  player1.move4=player1.pokemon.shadowclaw
  //Append Choice to Player Selection
  let p1Icon = document.createElement('img')
  p1Icon.src = player1.pokemon.icon;
  p1Icon.className = "leftSelectionChar"
  document.querySelector("#leftContainer").appendChild(p1Icon)
  //Display Fighter in Page2
  let fieldFighter1 = document.createElement('img')
  fieldFighter1.className = "battleIcons1";
  fieldFighter1.src = player1.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter1)
  //Player 2 Select Mode
  player2Choice.innerText = `Player 2 Select`
  currPlayer = 'Player2'

//Sound Effects
var sound = new Audio();         // create the audio
sound.src = "sounds/hitHurt.wav";  // set the resource location 
sound.oncanplaythrough = function(){   // When the sound has completely loaded
    sound.readyToRock = true;    // flag sound is ready to play
                                 // I just made it up and can be anything
};
sound.onerror = function(){      // not required but if there are problems this will help debug the problem
    console.log("Sound file hitHurt.wav failed to load.")
};

function playSound(){
  if(sound && sound.readyToRock){  // check for the sound and if it has loaded
    sound.volume = 0.050;
    sound.currentTime = 0;       // seek to the start
      sound.play();                // play it till it ends
  }
}

  //Pain Function

//Pain features --->
function p1Pain(){
  let p1Damage = document.getElementsByClassName("battleIcons1")
    p1Damage[0].classList.add("pain")
    playSound()
    // const animation = document.querySelector('p.animation');
    // animation.addEventListener('animationend', () => {
    //   p1Damage[0].classList.remove('active');
    // });
}

//4. Fix missed animation--Pokemon shouldnt flinch when attack misses
//5. Add sound effects----check (individual ones for each pok
//Animation Work: For Pain
document.body.addEventListener('animationend', () => {

  let p1Damage = document.getElementsByClassName("battleIcons1")
  p1Damage[0].classList.remove("pain")
  let p2Damage = document.getElementsByClassName("battleIcons2")
  p2Damage[0].classList.remove("pain")
}
)

function p2Pain(){
  let p2Damage = document.getElementsByClassName("battleIcons2")
    p2Damage[0].classList.add("pain")
    playSound()
}
  //EVENT LISTENERS FOR ALL MOVES
  document.getElementById("moveset1").addEventListener("click", () =>{
  
    player1.move1()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset2").addEventListener("click", () =>{
    //astonish()
    player1.move2()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset3").addEventListener("click", () =>{
    //shadowsneak()
    player1.move3()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset4").addEventListener("click", () =>{
    player1.move4()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset5").addEventListener("click", () =>{
    player2.move1()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset6").addEventListener("click", () =>{
    player2.move2()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset7").addEventListener("click", () =>{
    player2.move3()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset8").addEventListener("click", () =>{
    player2.move4()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  //end of damians code===============================================
  }
  if (currPlayer === 'Player2' && player1.pokemon!=haunter) {
  player2Choice.innerText = `Trainer 2 chose ${haunter.name}`
  //Player 2 starter properties
  player2.player = 'Player2'
  player2.pokemon = haunter
  player2.name = player2.pokemon.name
  player2.hp=player2.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player2.move1=player2.pokemon.shadowball2
  player2.move2=player2.pokemon.astonish2
  player2.move3=player2.pokemon.shadowsneak2
  player2.move4=player2.pokemon.shadowclaw2
  //Append fighter to selection screen
  var p2Icon = document.createElement('img')
  p2Icon.src = player2.pokemon.icon;
  p2Icon.className = "rightSelectionChar"
  document.querySelector("#rightContainer").appendChild(p2Icon)
  //Display fighter in Page2
  let fieldFighter2 = document.createElement('img')
  fieldFighter2.className = "battleIcons2";
  fieldFighter2.src = player2.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter2)
  currPlayer = null 
  ////Sets player selection to null until the next stage of game, prevents appending infinite Pokemon images
  }
  if (player1.pokemon === null || player2.pokemon === null) {
    document.getElementById("startButton").disabled=true;
  } else {
  //Start Game is ENABLED
  //Action Buttons inherit their names from player 1 and player

// convert()
  
  
    document.getElementById("startButton").disabled=false;}
}
//Box 2: JigglyPuff
function jigglyPuffSelect() {
  if (currPlayer === 'Player1') {
  //Starter proprties for player 1 object
  player1Choice.innerText = `Trainer 1 chose ${jigglyPuff.name}`
  player1.pokemon=jigglyPuff
  player1.player='Player1'
  player1.name = player1.pokemon.name
  player1.hp=player1.pokemon.hp
  //Class Moveset inheritance 
  player1.move1=player1.pokemon.sing
  player1.move2=player1.pokemon.strength
  player1.move3=player1.pokemon.smack
  player1.move4=player1.pokemon.bonk
  //Append fighter to selection screen
  var p1Icon = document.createElement('img')
  p1Icon.className = "leftSelectionChar"
  p1Icon.src = player1.pokemon.icon;
  document.querySelector("#leftContainer").appendChild(p1Icon)
  //Display fighter in page2
  let fieldFighter1 = document.createElement('img')
  fieldFighter1.className = "battleIcons1";
  fieldFighter1.src = player1.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter1)
  //Player 2 selection mode
  player2Choice.innerText = `Player 2 Select`
  currPlayer='Player2'

  //pain function for jigglypuff also
  //Pain features --->
function p1Pain(){
  let p1Damage = document.getElementsByClassName("battleIcons1")
    p1Damage[0].classList.add("pain")
    disableMoves1To4()
    // const animation = document.querySelector('p.animation');
    // animation.addEventListener('animationend', () => {
    //   p1Damage[0].classList.remove('active');
    // });
}

//Animation Work: For Pain

document.body.addEventListener('animationend', () => {
  let p1Damage = document.getElementsByClassName("battleIcons1")
  p1Damage[0].classList.remove("pain")
  let p2Damage = document.getElementsByClassName("battleIcons2")
  p2Damage[0].classList.remove("pain")
}
)

function p2Pain(){
  let p2Damage = document.getElementsByClassName("battleIcons2")
    p2Damage[0].classList.add("pain")
    disableMoves5To8()
}

  document.getElementById("moveset1").addEventListener("click", () =>{
    player1.move1()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset2").addEventListener("click", () =>{
    player1.move2()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset3").addEventListener("click", () =>{
    player1.move3()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset4").addEventListener("click", () =>{
    player1.move4()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset5").addEventListener("click", () =>{
    player2.move1()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset6").addEventListener("click", () =>{
    player2.move2()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset7").addEventListener("click", () =>{
    player2.move3()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset8").addEventListener("click", () =>{
    player2.move4()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  //damians code end ============================================
}
  if (currPlayer === 'Player2' && player1.pokemon!=jigglyPuff) {
  player2Choice.innerText = `Trainer 2 chose ${jigglyPuff.name}`
  //Player 2 object starter properties
  player2.pokemon = jigglyPuff
  player2.player = 'Player2'
  player2.name = player2.pokemon.name
  player2.hp=player2.pokemon.hp
  //Class moveset inheritance for player 2
  player2.move1=player2.pokemon.sing2
  player2.move2=player2.pokemon.smack2
  player2.move3=player2.pokemon.strength2
  player2.move4=player2.pokemon.bonk2
  //Append fighter to selection screen
  var p2Icon = document.createElement('img')
  p2Icon.src = player2.pokemon.icon;
  p2Icon.className = "rightSelectionChar"
  document.querySelector("#rightContainer").appendChild(p2Icon)
  //Append fighter to page2
  let fieldFighter2 = document.createElement('img')
  fieldFighter2.className = "battleIcons2";
  fieldFighter2.src = player2.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter2)
  currPlayer=null //Sets to null until the next stage of game, prevents appending infinite Pokemon images
  }
  //START GAME BUTTON DISABLED
  if (player1.pokemon === null || player2.pokemon === null) {
    document.getElementById("startButton").disabled=true;
  } else {
    //START GAME BUTTON ENABLED
  //Action Buttons inherit their names from player 1 and player

// convert()
  
  
    document.getElementById("startButton").disabled=false;}
}

function garchompSelect(){
  if (currPlayer === 'Player1') {
  player1Choice.innerText = `Trainer 1 chose ${garchomp.name}`
  //Starter properties for player 1 object
  player1.pokemon = garchomp
  player1.player= 'Player1'
  player1.name = player1.pokemon.name
  player1.hp=player1.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player1.move1=player1.pokemon.dragontail
  player1.move2=player1.pokemon.outrage
  player1.move3=player1.pokemon.crunch
  player1.move4=player1.pokemon.earthquake
  //Append Choice to Player Selection
  let p1Icon = document.createElement('img')
  p1Icon.src = player1.pokemon.icon;
  p1Icon.className = "leftSelectionChar"
  document.querySelector("#leftContainer").appendChild(p1Icon)
  //Display Fighter in Page2
  let fieldFighter1 = document.createElement('img')
  fieldFighter1.className = "battleIcons1";
  fieldFighter1.src = player1.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter1)
  //Player 2 Select Mode
  player2Choice.innerText = `Player 2 Select`
  currPlayer = 'Player2'

//Sound Effects
var sound = new Audio();         // create the audio
sound.volume = 1;
sound.src = "sounds/hitHurt.wav";  // set the resource location 
sound.oncanplaythrough = function(){   // When the sound has completely loaded
    sound.readyToRock = true;    // flag sound is ready to play
                                 // I just made it up and can be anything
};
sound.onerror = function(){      // not required but if there are problems this will help debug the problem
    console.log("Sound file hitHurt.wav failed to load.")
};

function playSound(){
  if(sound && sound.readyToRock){  // check for the sound and if it has loaded
      sound.currentTime = 0;       // seek to the start
      sound.play();                // play it till it ends
  }
}

  //Pain Function

//Pain features --->
function p1Pain(){
  let p1Damage = document.getElementsByClassName("battleIcons1")
    p1Damage[0].classList.add("pain")
    playSound()
    // const animation = document.querySelector('p.animation');
    // animation.addEventListener('animationend', () => {
    //   p1Damage[0].classList.remove('active');
    // });
}

//Animation Work: For Pain

document.body.addEventListener('animationend', () => {
  let p1Damage = document.getElementsByClassName("battleIcons1")
  p1Damage[0].classList.remove("pain")
  let p2Damage = document.getElementsByClassName("battleIcons2")
  p2Damage[0].classList.remove("pain")
}
)
function p2Pain(){
  let p2Damage = document.getElementsByClassName("battleIcons2")
    p2Damage[0].classList.add("pain")
    playSound()
}
  //EVENT LISTENERS FOR ALL MOVES
  document.getElementById("moveset1").addEventListener("click", () =>{
  
    player1.move1()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset2").addEventListener("click", () =>{
    //astonish()
    player1.move2()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset3").addEventListener("click", () =>{
    //shadowsneak()
    player1.move3()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset4").addEventListener("click", () =>{
    player1.move4()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset5").addEventListener("click", () =>{
    player2.move1()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset6").addEventListener("click", () =>{
    player2.move2()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset7").addEventListener("click", () =>{
    player2.move3()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset8").addEventListener("click", () =>{
    player2.move4()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  //end of damians code===============================================
  }
  if (currPlayer === 'Player2' && player1.pokemon!=garchomp) {
  player2Choice.innerText = `Trainer 2 chose ${garchomp.name}`
  //Player 2 starter properties
  player2.player = 'Player2'
  player2.pokemon = garchomp
  player2.name = player2.pokemon.name
  player2.hp=player2.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player2.move1=player2.pokemon.dragontail2
  player2.move2=player2.pokemon.outrage2
  player2.move3=player2.pokemon.crunch2
  player2.move4=player2.pokemon.earthquake2
  //Append fighter to selection screen
  var p2Icon = document.createElement('img')
  p2Icon.src = player2.pokemon.icon;
  p2Icon.className = "rightSelectionChar"
  document.querySelector("#rightContainer").appendChild(p2Icon)
  //Display fighter in Page2
  let fieldFighter2 = document.createElement('img')
  fieldFighter2.className = "battleIcons2";
  fieldFighter2.src = player2.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter2)
  currPlayer = null 
  ////Sets player selection to null until the next stage of game, prevents appending infinite Pokemon images
  }
  if (player1.pokemon === null || player2.pokemon === null) {
    document.getElementById("startButton").disabled=true;
  } else {
  //Start Game is ENABLED
  //Action Buttons inherit their names from player 1 and player
  moveset1.innerText = player1.move1.name
  moveset2.innerText = player1.move2.name
  moveset3.innerText = player1.move3.name
  moveset4.innerText = player1.move4.name
  moveset5.innerText = player2.move1.name
  moveset6.innerText = player2.move2.name
  moveset7.innerText = player2.move3.name
  moveset8.innerText = player2.move4.name
    document.getElementById("startButton").disabled=false;}
}

function arcanineSelect()  {
  if (currPlayer === 'Player1') {
  player1Choice.innerText = `Trainer 1 chose ${arcanine.name}`
  //Starter properties for player 1 object
  player1.pokemon=arcanine
  player1.player='Player1'
  player1.name = player1.pokemon.name
  player1.hp=player1.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player1.move1=player1.pokemon.FireFang
  player1.move2=player1.pokemon.fireblast
  player1.move3=player1.pokemon.flamethrower
  player1.move4=player1.pokemon.wildcharge
  //Append Choice to Player Selection
  let p1Icon = document.createElement('img')
  p1Icon.src = player1.pokemon.icon;
  p1Icon.className = "leftSelectionChar"
  document.querySelector("#leftContainer").appendChild(p1Icon)
  //Display Fighter in Page2
  let fieldFighter1 = document.createElement('img')
  fieldFighter1.className = "battleIcons1";
  fieldFighter1.src = player1.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter1)
  //Player 2 Select Mode
  player2Choice.innerText = `Player 2 Select`
  currPlayer = 'Player2'

//Sound Effects
var sound = new Audio();         // create the audio
sound.src = "sounds/hitHurt.wav";  // set the resource location 
sound.oncanplaythrough = function(){   // When the sound has completely loaded
    sound.readyToRock = true;    // flag sound is ready to play
                                 // I just made it up and can be anything
};
sound.onerror = function(){      // not required but if there are problems this will help debug the problem
    console.log("Sound file hitHurt.wav failed to load.")
};

function playSound(){
  if(sound && sound.readyToRock){  // check for the sound and if it has loaded
    sound.volume = 0.050;
    sound.currentTime = 0;       // seek to the start
      sound.play();                // play it till it ends
  }
}

  //Pain Function

//Pain features --->
function p1Pain(){
  let p1Damage = document.getElementsByClassName("battleIcons1")
    p1Damage[0].classList.add("pain")
    playSound()
    // const animation = document.querySelector('p.animation');
    // animation.addEventListener('animationend', () => {
    //   p1Damage[0].classList.remove('active');
    // });
}

//Animation Work: For Pain
document.body.addEventListener('animationend', () => {

  let p1Damage = document.getElementsByClassName("battleIcons1")
  p1Damage[0].classList.remove("pain")
  let p2Damage = document.getElementsByClassName("battleIcons2")
  p2Damage[0].classList.remove("pain")
}
)

function p2Pain(){
  let p2Damage = document.getElementsByClassName("battleIcons2")
    p2Damage[0].classList.add("pain")
    playSound()
}
  //EVENT LISTENERS FOR ALL MOVES
  document.getElementById("moveset1").addEventListener("click", () =>{
  
    player1.move1()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset2").addEventListener("click", () =>{
    //astonish()
    player1.move2()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset3").addEventListener("click", () =>{
    //shadowsneak()
    player1.move3()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset4").addEventListener("click", () =>{
    player1.move4()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset5").addEventListener("click", () =>{
    player2.move1()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset6").addEventListener("click", () =>{
    player2.move2()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset7").addEventListener("click", () =>{
    player2.move3()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset8").addEventListener("click", () =>{
    player2.move4()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  //end of damians code===============================================
  }
  if (currPlayer === 'Player2' && player1.pokemon!=arcanine) {
  player2Choice.innerText = `Trainer 2 chose ${arcanine.name}`
  //Player 2 starter properties
  player2.player = 'Player2'
  player2.pokemon = arcanine
  player2.name = player2.pokemon.name
  player2.hp=player2.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player2.move1=player2.pokemon.fireblast2
  player2.move2=player2.pokemon.fireblast2
  player2.move3=player2.pokemon.flamethrower2
  player2.move4=player2.pokemon.wildcharge2
  //Append fighter to selection screen
  var p2Icon = document.createElement('img')
  p2Icon.src = player2.pokemon.icon;
  p2Icon.className = "rightSelectionChar"
  document.querySelector("#rightContainer").appendChild(p2Icon)
  //Display fighter in Page2
  let fieldFighter2 = document.createElement('img')
  fieldFighter2.className = "battleIcons2";
  fieldFighter2.src = player2.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter2)
  currPlayer = null 
  ////Sets player selection to null until the next stage of game, prevents appending infinite Pokemon images
  }
  if (player1.pokemon === null || player2.pokemon === null) {
    document.getElementById("startButton").disabled=true;
  } else {
  //Start Game is ENABLED
  //Action Buttons inherit their names from player 1 and player

  // convert()
    document.getElementById("startButton").disabled=false;}
}

function pikachuSelect(){
  if (currPlayer === 'Player1') {
  player1Choice.innerText = `Trainer 1 chose ${pikachu.name}`
  //Starter properties for player 1 object
  player1.pokemon = pikachu
  player1.player= 'Player1'
  player1.name = player1.pokemon.name
  player1.hp=player1.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player1.move1=player1.pokemon.thunderweb
  player1.move2=player1.pokemon.thundershock
  player1.move3=player1.pokemon.irontail
  player1.move4=player1.pokemon.quickattack
  //Append Choice to Player Selection
  let p1Icon = document.createElement('img')
  p1Icon.src = player1.pokemon.icon;
  p1Icon.className = "leftSelectionChar"
  document.querySelector("#leftContainer").appendChild(p1Icon)
  //Display Fighter in Page2
  let fieldFighter1 = document.createElement('img')
  fieldFighter1.className = "battleIcons1";
  fieldFighter1.src = player1.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter1)
  //Player 2 Select Mode
  player2Choice.innerText = `Player 2 Select`
  currPlayer = 'Player2'

//Sound Effects
var sound = new Audio();         // create the audio
sound.volume = 1;
sound.src = "sounds/hitHurt.wav";  // set the resource location 
sound.oncanplaythrough = function(){   // When the sound has completely loaded
    sound.readyToRock = true;    // flag sound is ready to play
                                 // I just made it up and can be anything
};
sound.onerror = function(){      // not required but if there are problems this will help debug the problem
    console.log("Sound file hitHurt.wav failed to load.")
};

function playSound(){
  if(sound && sound.readyToRock){  // check for the sound and if it has loaded
      sound.currentTime = 0;       // seek to the start
      sound.play();                // play it till it ends
  }
}

  //Pain Function

//Pain features --->
function p1Pain(){
  let p1Damage = document.getElementsByClassName("battleIcons1")
    p1Damage[0].classList.add("pain")
    playSound()
    // const animation = document.querySelector('p.animation');
    // animation.addEventListener('animationend', () => {
    //   p1Damage[0].classList.remove('active');
    // });
}

//Animation Work: For Pain

document.body.addEventListener('animationend', () => {
  let p1Damage = document.getElementsByClassName("battleIcons1")
  p1Damage[0].classList.remove("pain")
  let p2Damage = document.getElementsByClassName("battleIcons2")
  p2Damage[0].classList.remove("pain")
}
)
function p2Pain(){
  let p2Damage = document.getElementsByClassName("battleIcons2")
    p2Damage[0].classList.add("pain")
    playSound()
}
  //EVENT LISTENERS FOR ALL MOVES
  document.getElementById("moveset1").addEventListener("click", () =>{
  
    player1.move1()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset2").addEventListener("click", () =>{
    //astonish()
    player1.move2()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset3").addEventListener("click", () =>{
    //shadowsneak()
    player1.move3()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset4").addEventListener("click", () =>{
    player1.move4()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset5").addEventListener("click", () =>{
    player2.move1()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset6").addEventListener("click", () =>{
    player2.move2()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset7").addEventListener("click", () =>{
    player2.move3()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset8").addEventListener("click", () =>{
    player2.move4()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  //end of damians code===============================================
  }
  if (currPlayer === 'Player2' && player1.pokemon!=pikachu) {
  player2Choice.innerText = `Trainer 2 chose ${pikachu.name}`
  //Player 2 starter properties
  player2.player = 'Player2'
  player2.pokemon = pikachu
  player2.name = player2.pokemon.name
  player2.hp=player2.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player2.move1=player2.pokemon.thunderweb2
  player2.move2=player2.pokemon.thundershock2
  player2.move3=player2.pokemon.irontail2
  player2.move4=player2.pokemon.quickattack2
  //Append fighter to selection screen
  var p2Icon = document.createElement('img')
  p2Icon.src = player2.pokemon.icon;
  p2Icon.className = "rightSelectionChar"
  document.querySelector("#rightContainer").appendChild(p2Icon)
  //Display fighter in Page2
  let fieldFighter2 = document.createElement('img')
  fieldFighter2.className = "battleIcons2";
  fieldFighter2.src = player2.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter2)
  currPlayer = null 
  ////Sets player selection to null until the next stage of game, prevents appending infinite Pokemon images
  }
  if (player1.pokemon === null || player2.pokemon === null) {
    document.getElementById("startButton").disabled=true;
  } else {
  //Start Game is ENABLED
  //Action Buttons inherit their names from player 1 and player
  moveset1.innerText = player1.move1.name
  moveset2.innerText = player1.move2.name
  moveset3.innerText = player1.move3.name
  moveset4.innerText = player1.move4.name
  moveset5.innerText = player2.move1.name
  moveset6.innerText = player2.move2.name
  moveset7.innerText = player2.move3.name
  moveset8.innerText = player2.move4.name
    document.getElementById("startButton").disabled=false;}
}

function venusaurSelect(){
  if (currPlayer === 'Player1') {
  player1Choice.innerText = `Trainer 1 chose ${venusaur.name}`
  //Starter properties for player 1 object
  player1.pokemon= venusaur
  player1.player='Player1'
  player1.name = player1.pokemon.name
  player1.hp=player1.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player1.move1=player1.pokemon.bulletseed
  player1.move2=player1.pokemon.razorleaf
  player1.move3=player1.pokemon.petalblizzard
  player1.move4=player1.pokemon.solarbeam
  //Append Choice to Player Selection
  let p1Icon = document.createElement('img')
  p1Icon.src = player1.pokemon.icon;
  p1Icon.className = "leftSelectionChar"
  document.querySelector("#leftContainer").appendChild(p1Icon)
  //Display Fighter in Page2
  let fieldFighter1 = document.createElement('img')
  fieldFighter1.className = "battleIcons1";
  fieldFighter1.src = player1.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter1)
  //Player 2 Select Mode
  player2Choice.innerText = `Player 2 Select`
  currPlayer = 'Player2'

//Sound Effects
var sound = new Audio();         // create the audio
sound.volume = 1;
sound.src = "sounds/hitHurt.wav";  // set the resource location 
sound.oncanplaythrough = function(){   // When the sound has completely loaded
    sound.readyToRock = true;    // flag sound is ready to play
                                 // I just made it up and can be anything
};
sound.onerror = function(){      // not required but if there are problems this will help debug the problem
    console.log("Sound file hitHurt.wav failed to load.")
};

function playSound(){
  if(sound && sound.readyToRock){  // check for the sound and if it has loaded
      sound.currentTime = 0;       // seek to the start
      sound.play();                // play it till it ends
  }
}

  //Pain Function

//Pain features --->
function p1Pain(){
  let p1Damage = document.getElementsByClassName("battleIcons1")
    p1Damage[0].classList.add("pain")
    playSound()
    // const animation = document.querySelector('p.animation');
    // animation.addEventListener('animationend', () => {
    //   p1Damage[0].classList.remove('active');
    // });
}

//Animation Work: For Pain

document.body.addEventListener('animationend', () => {
  let p1Damage = document.getElementsByClassName("battleIcons1")
  p1Damage[0].classList.remove("pain")
  let p2Damage = document.getElementsByClassName("battleIcons2")
  p2Damage[0].classList.remove("pain")
}
)
function p2Pain(){
  let p2Damage = document.getElementsByClassName("battleIcons2")
    p2Damage[0].classList.add("pain")
    playSound()
}
  //EVENT LISTENERS FOR ALL MOVES
  document.getElementById("moveset1").addEventListener("click", () =>{
  
    player1.move1()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset2").addEventListener("click", () =>{
    //astonish()
    player1.move2()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset3").addEventListener("click", () =>{
    //shadowsneak()
    player1.move3()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset4").addEventListener("click", () =>{
    player1.move4()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset5").addEventListener("click", () =>{
    player2.move1()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset6").addEventListener("click", () =>{
    player2.move2()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset7").addEventListener("click", () =>{
    player2.move3()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset8").addEventListener("click", () =>{
    player2.move4()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  //end of damians code===============================================
  }
  if (currPlayer === 'Player2' && player1.pokemon!=venusaur) {
  player2Choice.innerText = `Trainer 2 chose ${venusaur.name}`
  //Player 2 starter properties
  player2.player = 'Player2'
  player2.pokemon = venusaur
  player2.name = player2.pokemon.name
  player2.hp=player2.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player2.move1=player2.pokemon.bulletseed2
  player2.move2=player2.pokemon.razorleaf2
  player2.move3=player2.pokemon.petalblizzard2
  player2.move4=player2.pokemon.solarbeam2
  //Append fighter to selection screen
  var p2Icon = document.createElement('img')
  p2Icon.src = player2.pokemon.icon;
  p2Icon.className = "rightSelectionChar"
  document.querySelector("#rightContainer").appendChild(p2Icon)
  //Display fighter in Page2
  let fieldFighter2 = document.createElement('img')
  fieldFighter2.className = "battleIcons2";
  fieldFighter2.src = player2.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter2)
  currPlayer = null 
  ////Sets player selection to null until the next stage of game, prevents appending infinite Pokemon images
  }
  if (player1.pokemon === null || player2.pokemon === null) {
    document.getElementById("startButton").disabled=true;
  } else {
  //Start Game is ENABLED
  //Action Buttons inherit their names from player 1 and player

// convert()
    document.getElementById("startButton").disabled=false;}
}

function alakazamSelect(){
  if (currPlayer === 'Player1') {
  player1Choice.innerText = `Trainer 1 chose ${alakazam.name}`
  //Starter properties for player 1 object
  player1.pokemon= alakazam
  player1.player='Player1'
  player1.name = player1.pokemon.name
  player1.hp=player1.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player1.move1=player1.pokemon.confusion
  player1.move2=player1.pokemon.psychic
  player1.move3=player1.pokemon.futuresight
  player1.move4=player1.pokemon.Mindfreak
  //Append Choice to Player Selection
  let p1Icon = document.createElement('img')
  p1Icon.src = player1.pokemon.icon;
  p1Icon.className = "leftSelectionChar"
  document.querySelector("#leftContainer").appendChild(p1Icon)
  //Display Fighter in Page2
  let fieldFighter1 = document.createElement('img')
  fieldFighter1.className = "battleIcons1";
  fieldFighter1.src = player1.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter1)
  //Player 2 Select Mode
  player2Choice.innerText = `Player 2 Select`
  currPlayer = 'Player2'

//Sound Effects
var sound = new Audio();         // create the audio
sound.volume = 1;
sound.src = "sounds/hitHurt.wav";  // set the resource location 
sound.oncanplaythrough = function(){   // When the sound has completely loaded
    sound.readyToRock = true;    // flag sound is ready to play
                                 // I just made it up and can be anything
};
sound.onerror = function(){      // not required but if there are problems this will help debug the problem
    console.log("Sound file hitHurt.wav failed to load.")
};

function playSound(){
  if(sound && sound.readyToRock){  // check for the sound and if it has loaded
      sound.currentTime = 0;       // seek to the start
      sound.play();                // play it till it ends
  }
}

  //Pain Function

//Pain features --->
function p1Pain(){
  let p1Damage = document.getElementsByClassName("battleIcons1")
    p1Damage[0].classList.add("pain")
    playSound()
    // const animation = document.querySelector('p.animation');
    // animation.addEventListener('animationend', () => {
    //   p1Damage[0].classList.remove('active');
    // });
}

//Animation Work: For Pain

document.body.addEventListener('animationend', () => {
  let p1Damage = document.getElementsByClassName("battleIcons1")
  p1Damage[0].classList.remove("pain")
  let p2Damage = document.getElementsByClassName("battleIcons2")
  p2Damage[0].classList.remove("pain")
}
)
function p2Pain(){
  let p2Damage = document.getElementsByClassName("battleIcons2")
    p2Damage[0].classList.add("pain")
    playSound()
}
  //EVENT LISTENERS FOR ALL MOVES
  document.getElementById("moveset1").addEventListener("click", () =>{
  
    player1.move1()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset2").addEventListener("click", () =>{
    //astonish()
    player1.move2()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset3").addEventListener("click", () =>{
    //shadowsneak()
    player1.move3()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset4").addEventListener("click", () =>{
    player1.move4()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset5").addEventListener("click", () =>{
    player2.move1()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset6").addEventListener("click", () =>{
    player2.move2()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset7").addEventListener("click", () =>{
    player2.move3()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset8").addEventListener("click", () =>{
    player2.move4()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  //end of damians code===============================================
  }
  if (currPlayer === 'Player2' && player1.pokemon!=alakazam) {
  player2Choice.innerText = `Trainer 2 chose ${alakazam.name}`
  //Player 2 starter properties
  player2.player = 'Player2'
  player2.pokemon = alakazam
  player2.name = player2.pokemon.name
  player2.hp=player2.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player2.move1=player2.pokemon.confusion2
  player2.move2=player2.pokemon.psychic2
  player2.move3=player2.pokemon.futuresight2
  player2.move4=player2.pokemon.Mindfreak2
  //Append fighter to selection screen
  var p2Icon = document.createElement('img')
  p2Icon.src = player2.pokemon.icon;
  p2Icon.className = "rightSelectionChar"
  document.querySelector("#rightContainer").appendChild(p2Icon)
  //Display fighter in Page2
  let fieldFighter2 = document.createElement('img')
  fieldFighter2.className = "battleIcons2";
  fieldFighter2.src = player2.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter2)
  currPlayer = null 
  ////Sets player selection to null until the next stage of game, prevents appending infinite Pokemon images
  }
  if (player1.pokemon === null || player2.pokemon === null) {
    document.getElementById("startButton").disabled=true;
  } else {
  //Start Game is ENABLED
  //Action Buttons inherit their names from player 1 and player

// convert()
    document.getElementById("startButton").disabled=false;}
}

function onyxSelect(){
  if (currPlayer === 'Player1') {
  player1Choice.innerText = `Trainer 1 chose ${onyx.name}`
  //Starter properties for player 1 object
  player1.pokemon= onyx
  player1.player='Player1'
  player1.name = player1.pokemon.name
  player1.hp=player1.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player1.move1=player1.pokemon.ancientpower
  player1.move2=player1.pokemon.headsmash
  player1.move3=player1.pokemon.meteorbeam
  player1.move4=player1.pokemon.smackdown
  //Append Choice to Player Selection
  let p1Icon = document.createElement('img')
  p1Icon.src = player1.pokemon.icon;
  p1Icon.className = "leftSelectionChar"
  document.querySelector("#leftContainer").appendChild(p1Icon)
  //Display Fighter in Page2
  let fieldFighter1 = document.createElement('img')
  fieldFighter1.className = "battleIcons1";
  fieldFighter1.src = player1.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter1)
  //Player 2 Select Mode
  player2Choice.innerText = `Player 2 Select`
  currPlayer = 'Player2'

//Sound Effects
var sound = new Audio();         // create the audio
sound.volume = 1;
sound.src = "sounds/hitHurt.wav";  // set the resource location 
sound.oncanplaythrough = function(){   // When the sound has completely loaded
    sound.readyToRock = true;    // flag sound is ready to play
                                 // I just made it up and can be anything
};
sound.onerror = function(){      // not required but if there are problems this will help debug the problem
    console.log("Sound file hitHurt.wav failed to load.")
};

function playSound(){
  if(sound && sound.readyToRock){  // check for the sound and if it has loaded
      sound.currentTime = 0;       // seek to the start
      sound.play();                // play it till it ends
  }
}

  //Pain Function

//Pain features --->
function p1Pain(){
  let p1Damage = document.getElementsByClassName("battleIcons1")
    p1Damage[0].classList.add("pain")
    playSound()
    // const animation = document.querySelector('p.animation');
    // animation.addEventListener('animationend', () => {
    //   p1Damage[0].classList.remove('active');
    // });
}

//Animation Work: For Pain

document.body.addEventListener('animationend', () => {
  let p1Damage = document.getElementsByClassName("battleIcons1")
  p1Damage[0].classList.remove("pain")
  let p2Damage = document.getElementsByClassName("battleIcons2")
  p2Damage[0].classList.remove("pain")
}
)
function p2Pain(){
  let p2Damage = document.getElementsByClassName("battleIcons2")
    p2Damage[0].classList.add("pain")
    playSound()
}
  //EVENT LISTENERS FOR ALL MOVES
  document.getElementById("moveset1").addEventListener("click", () =>{
  
    player1.move1()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset2").addEventListener("click", () =>{
    //astonish()
    player1.move2()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset3").addEventListener("click", () =>{
    //shadowsneak()
    player1.move3()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset4").addEventListener("click", () =>{
    player1.move4()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset5").addEventListener("click", () =>{
    player2.move1()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset6").addEventListener("click", () =>{
    player2.move2()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset7").addEventListener("click", () =>{
    player2.move3()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset8").addEventListener("click", () =>{
    player2.move4()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  //end of damians code===============================================
  }
  if (currPlayer === 'Player2' && player1.pokemon!=onyx) {
  player2Choice.innerText = `Trainer 2 chose ${onyx.name}`
  //Player 2 starter properties
  player2.player = 'Player2'
  player2.pokemon = onyx
  player2.name = player2.pokemon.name
  player2.hp=player2.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player2.move1=player2.pokemon.ancientpower2
  player2.move2=player2.pokemon.headsmash2
  player2.move3=player2.pokemon.meteorbeam2
  player2.move4=player2.pokemon.smackdown2
  //Append fighter to selection screen
  var p2Icon = document.createElement('img')
  p2Icon.src = player2.pokemon.icon;
  p2Icon.className = "rightSelectionChar"
  document.querySelector("#rightContainer").appendChild(p2Icon)
  //Display fighter in Page2
  let fieldFighter2 = document.createElement('img')
  fieldFighter2.className = "battleIcons2";
  fieldFighter2.src = player2.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter2)
  currPlayer = null 
  ////Sets player selection to null until the next stage of game, prevents appending infinite Pokemon images
  }
  if (player1.pokemon === null || player2.pokemon === null) {
    document.getElementById("startButton").disabled=true;
  } else {
  //Start Game is ENABLED
  //Action Buttons inherit their names from player 1 and player

// convert()
    document.getElementById("startButton").disabled=false;}
}

//NEW Pokemon instances
const onyx = new Pokemon('Onyx', 200, "images/onyx.png", "images/onyx.png")
const alakazam = new Pokemon('Alakazam', 200, "images/alakazam.png", "images/alakazam.png")
const pikachu = new Pokemon('Pikachu', 200, "images/pika.png", "images/pika.png")
const venusaur = new Pokemon('Venusaur', 200, "images/venusaur.png", "images/venusaur.png")
const arcanine = new Pokemon('Arcanine', 200, "images/Arcanine1.png", "images/Arcanine1.png")
const garchomp = new Pokemon('Garchomp', 200, "images/Garchomp.png", "images/Garchomp.png")
const jigglyPuff = new Pokemon('Jigglypuff', 200, "images/Jiggs.gif", "images/jigglypuff-back-gif.png")
const wartortle = new Pokemon('Wartortle', 200, "images/wartortle.gif", "images/wartortle.gif")
const haunter = new Pokemon('Haunter', 200, "images/haunter-front-gif.png", "images/haunter-back-gif.png",["shadowball","curse","dream","hate"])
//Event Listeners for player chocie
let player1Choice = document.getElementById("player1Choice")
document.getElementById("char1").addEventListener("click", haunterSelect)
let player2Choice = document.getElementById("player2Choice")
document.getElementById("char2").addEventListener("click", jigglyPuffSelect)
let player3Choice = document.getElementById("player3Choice")
document.getElementById("char3").addEventListener("click", garchompSelect)
let player4Choice = document.getElementById("player4Choice")
document.getElementById("char4").addEventListener("click", arcanineSelect)
let player5Choice = document.getElementById("player5Choice")
document.getElementById("char5").addEventListener("click", venusaurSelect)
let player6Choice = document.getElementById("player6Choice")
document.getElementById("char6").addEventListener("click", pikachuSelect)
let player7Choice = document.getElementById("player7Choice")
document.getElementById("char7").addEventListener("click", wartortleSelect)
let player8Choice = document.getElementById("player8Choice")
document.getElementById("char8").addEventListener("click", alakazamSelect)
let player9Choice = document.getElementById("player9Choice")
document.getElementById("char9").addEventListener("click", onyxSelect)
let player10Choice = document.getElementById("player9Choice")
document.getElementById("char10").addEventListener("click", raikouSelect)
// FUNTIONS TO DISABLE moveset1 to moveset4
function disableMoves1To4() {
  document.getElementById("moveset1").disabled = true
  document.getElementById("moveset2").disabled = true
  document.getElementById("moveset3").disabled = true
  document.getElementById("moveset4").disabled = true

  document.getElementById("moveset5").disabled = false
  document.getElementById("moveset6").disabled = false
  document.getElementById("moveset7").disabled = false
  document.getElementById("moveset8").disabled = false
}

// FUNTIONS TO DISABLE moveset5 to moveset8
function disableMoves5To8() {
  document.getElementById("moveset5").disabled = true
  document.getElementById("moveset6").disabled = true
  document.getElementById("moveset7").disabled = true
  document.getElementById("moveset8").disabled = true

  document.getElementById("moveset1").disabled = false
  document.getElementById("moveset2").disabled = false
  document.getElementById("moveset3").disabled = false
  document.getElementById("moveset4").disabled = false
}

//START GAME BUTTON
let startGame = document.querySelector("#startButton")
document.getElementById("movesets").style.display = "none";
document.getElementById("winner-message").style.display = "none";

//Start Game Button Function
startGame.addEventListener("click", () => {
//Convert Attack Button Names
let firstChar = player1.move1.name.toString().substring(0, 1).toUpperCase()
let player1move1 = player1.move1.name.toString().substring(1).toLowerCase()
player1move1 = firstChar.concat(player1move1)
moveset1.innerText = player1move1
let secondChar = player1.move2.name.toString().substring(0, 1).toUpperCase()
let player1move2 = player1.move2.name.toString().substring(1).toLowerCase()
player1move2 = secondChar.concat(player1move2)
moveset2.innerText = player1move2
let thirdChar = player1.move3.name.toString().substring(0, 1).toUpperCase()
let player1move3 = player1.move3.name.toString().substring(1).toLowerCase()
player1move3 = thirdChar.concat(player1move3)
moveset3.innerText = player1move3
let fourthChar = player1.move4.name.toString().substring(0, 1).toUpperCase()
let player1move4 = player1.move4.name.toString().substring(1).toLowerCase()
player1move4 = fourthChar.concat(player1move4)
moveset4.innerText = player1move4
let fifthChar = player2.move1.name.toString().substring(0, 1).toUpperCase()
let player2move1 = player2.move1.name.toString().substring(1).toLowerCase()
player2move1 = fifthChar.concat(player2move1)
player2move1 = player2move1.split('')
player2move1.pop()
player2move1 = player2move1.join('')
moveset5.innerText = player2move1
let sixthChar = player2.move2.name.toString().substring(0, 1).toUpperCase()
let player2move2 = player2.move2.name.toString().substring(1).toLowerCase()
player2move2 = sixthChar.concat(player2move2)
player2move2 = player2move2.split('')
player2move2.pop()
player2move2 = player2move2.join('')
moveset6.innerText = player2move2
let seventhChar = player2.move3.name.toString().substring(0, 1).toUpperCase()
let player2move3 = player2.move3.name.toString().substring(1).toLowerCase()
player2move3 = seventhChar.concat(player2move3)
player2move3 = player2move3.split('')
player2move3.pop()
player2move3 = player2move3.join('')
moveset7.innerText = player2move3
let eigthChar = player2.move4.name.toString().substring(0, 1).toUpperCase()
let player2move4 = player2.move4.name.toString().substring(1).toLowerCase()
player2move4 = eigthChar.concat(player2move4)
player2move4 = player2move4.split('')
player2move4.pop()
player2move4 = player2move4.join('')
moveset8.innerText = player2move4
//moveset1.innertText = player1.move1.name //produce function name: shadowBall

  turnOfPlayer = 1
  changeOfTurn() //Resets Turn to Player 1
  resetHealth() //Resets Health
  document.getElementById("startButton").disabled=true;
  reset.style.display = "none"
  //disable the moves in the begining for player2
  disableMoves5To8()
  //Removes fighters off battlefield
  let rightContainer = document.querySelector("#rightContainer")
  rightContainer.removeChild(rightContainer.lastElementChild)
  let leftContainer = document.querySelector("#leftContainer")
  leftContainer.removeChild(leftContainer.lastElementChild)
  //Moves to Page 2
  document.getElementById("page1").style.display = "none";
  //document.getElementById("startButton").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("title").style.display = "none";
  document.getElementById("page2").style.display = 'block';
  document.getElementById("movesets").style.display = 'block';
// document.getElementById("winner-message").style.display = 'block';  this is for PAGE 3
})


//END OF BATTLE PHASE
function endOfBattle() {
  turnOfPlayer=null
  changeOfTurn() // "Game over" Turn
  //No movesets -- all disabled
  document.getElementById("moveset1").disabled = true
  document.getElementById("moveset2").disabled = true
  document.getElementById("moveset3").disabled = true
  document.getElementById("moveset4").disabled = true
  document.getElementById("moveset5").disabled = true
  document.getElementById("moveset6").disabled = true
  document.getElementById("moveset7").disabled = true
  document.getElementById("moveset8").disabled = true
  //Return reset button
  reset.style.display = "block"
  //Set current pokemon to null, allow future selection
  player1.pokemon=null
  player2.pokemon=null
  document.getElementById("char1").addEventListener("click", haunterSelect)
  document.getElementById("char7").addEventListener("click", wartortleSelect) 
  document.getElementById("char2").addEventListener("click", jigglyPuffSelect)
  document.getElementById("char3").addEventListener("click", garchompSelect)
  document.getElementById("char4").addEventListener("click", arcanineSelect)
  document.getElementById("char5").addEventListener("click", venusaurSelect)
  document.getElementById("char6").addEventListener("click", pikachuSelect)
  document.getElementById("char7").addEventListener("click", wartortleSelect)
  document.getElementById("char8").addEventListener("click", alakazamSelect)
  document.getElementById("char9").addEventListener("click", onyxSelect)
  document.getElementById("char10").addEventListener("click", raikouSelect)
}


//GAME HAS ENDED - Player 1 or Player 2 Dies
//Large nested If-Else statement, contains every game ending scenario/reset outcome
function gameIsOver(){

if (dosplayer === 0 ) {
// let replay = document.createElement("button")
// replay.className = "replay"
// replay.innerHTML="Player 1 won. Rematch?"
// document.getElementsByTagName("body").appendChild(replay)

//reset button
reset.style.display="block"
reset.style.position="absolute"
reset.style.width="40vh"
reset.style.height="20vh"
reset.style.top="50vh"
reset.style.left="50vh"
reset.innerText="Trainer 1 Wins! Click to Rematch?"

endOfBattle()
//event listener for reset button
reset.addEventListener("click", () => {
  location.reload();
//removes fighters off of field
const removeFighter1 = document.getElementsByClassName("battleIcons1");
  while (removeFighter1.length > 0) removeFighter1[0].remove();
  const removeFighter2 = document.getElementsByClassName("battleIcons2");
  while (removeFighter2.length > 0) removeFighter2[0].remove();

//REDISPLAY PAGE1
document.getElementById("page2").style.display = "none"
document.getElementById("title").style.display = "block"
 document.getElementById("page1").style.display = "flex"
 document.getElementById("middleContainer").style.display = "flex"
 document.getElementById("middleContainer").style.width = "50vh"
 document.getElementById("middleContainer").style.height = "50vh"
 document.getElementById("middleContainer").style.justifyContent = "center"
 document.getElementById("player1Choice").innerText = `Player 1 Select`
 document.getElementById("player2Choice").innerText = `Player 2 Select`
 document.getElementById("title").style.textAlign = "center"
// document.getElementById("leftContainer").style.display = "block"
// document.getElementById("middleContainer").style.display = "block"
// document.getElementById("rightContainer").style.display = "block"
document.getElementById("start").style.display = "block"
//set current player to player 1
currPlayer = "Player1"
//hide reset button
document.getElementById("reset").style.display = "none"
}
)


// //SAME AS Before---reset functionality for if Player 2 wins
// //ADDED BACK RELOAD HERE
// window.alert('Trainer 1 won'); 
// location.reload();
} else if (unoplayer === 0) {
// //ADDED BACK RELOAD HERE
// window.alert('Trainer 2 won'); 
// location.reload();
reset.style.display="block"
reset.style.position="absolute"
reset.style.width="40vh"
reset.style.height="20vh"
reset.style.top="50vh"
reset.style.left="50vh"
reset.innerText="Trainer 2 Wins! Click to Rematch?"
endOfBattle()

reset.addEventListener("click", () => {
  location.reload();
  const removeFighter1 = document.getElementsByClassName("battleIcons1");
  while (removeFighter1.length > 0) removeFighter1[0].remove();
  const removeFighter2 = document.getElementsByClassName("battleIcons2");
  while (removeFighter2.length > 0) removeFighter2[0].remove();

document.getElementById("page2").style.display = "none"
document.getElementById("title").style.display = "block"
document.getElementById("page1").style.display = "flex"
document.getElementById("middleContainer").style.display = "flex"
document.getElementById("middleContainer").style.width = "50vh"
document.getElementById("middleContainer").style.height = "50vh"
document.getElementById("middleContainer").style.justifyContent = "center"
document.getElementById("player1Choice").innerText = `Player 1 Select`
 document.getElementById("player2Choice").innerText = `Player 2 Select`
document.getElementById("title").style.textAlign = "center"




currPlayer = "Player1"
 
document.getElementById("start").style.display = "block"
document.getElementById("reset").style.display = "none"
}
)
}
}

// //PAGE 2 GO TO PAGE 3
// let button2 = document.createElement("button");
// // document.getElementById("container2").appendChild(button2);
// button2.addEventListener("click", () => {
//   document.getElementById("container2").style.display = "none";
//   // document.getElementById("testing last page").style.display = "block";

// })


//page 3
/*
if health === 0 {
  go to third page
  display winner
}
*/

const raikou = new Pokemon('Raikou', 200, "images/shinyraikou.png", "images/shinyraikou.png")
document.getElementById("char10").style.display = "none";


function updateValue() {
  document.getElementById("char10").style.display = "block";
}
const input = document.getElementById('code');
const log = document.getElementById('values');

code.addEventListener('input', updateValue); {
  preventDefault();
  if(document.getElementById("code") === "Legendary") {
    updateValue()
  }
}

function raikouSelect(){
  if (currPlayer === 'Player1') {
  player1Choice.innerText = `Trainer 1 chose ${raikou.name}`
  //Starter properties for player 1 object
  player1.pokemon= raikou
  player1.player='Player1'
  player1.name = player1.pokemon.name
  player1.hp=player1.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player1.move1=player1.pokemon.weatherball
  player1.move2=player1.pokemon.thunderbolt
  player1.move3=player1.pokemon.thunder
  player1.move4=player1.pokemon.snarl
  //Append Choice to Player Selection
  let p1Icon = document.createElement('img')
  p1Icon.src = player1.pokemon.icon;
  p1Icon.className = "leftSelectionChar"
  document.querySelector("#leftContainer").appendChild(p1Icon)
  //Display Fighter in Page2
  let fieldFighter1 = document.createElement('img')
  fieldFighter1.className = "battleIcons1";
  fieldFighter1.src = player1.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter1)
  //Player 2 Select Mode
  player2Choice.innerText = `Player 2 Select`
  currPlayer = 'Player2'

//Sound Effects
var sound = new Audio();         // create the audio
sound.volume = 1;
sound.src = "sounds/hitHurt.wav";  // set the resource location 
sound.oncanplaythrough = function(){   // When the sound has completely loaded
    sound.readyToRock = true;    // flag sound is ready to play
                                 // I just made it up and can be anything
};
sound.onerror = function(){      // not required but if there are problems this will help debug the problem
    console.log("Sound file hitHurt.wav failed to load.")
};

function playSound(){
  if(sound && sound.readyToRock){  // check for the sound and if it has loaded
      sound.currentTime = 0;       // seek to the start
      sound.play();                // play it till it ends
  }
}

  //Pain Function

//Pain features --->
function p1Pain(){
  let p1Damage = document.getElementsByClassName("battleIcons1")
    p1Damage[0].classList.add("pain")
    playSound()
    // const animation = document.querySelector('p.animation');
    // animation.addEventListener('animationend', () => {
    //   p1Damage[0].classList.remove('active');
    // });
}

//Animation Work: For Pain

document.body.addEventListener('animationend', () => {
  let p1Damage = document.getElementsByClassName("battleIcons1")
  p1Damage[0].classList.remove("pain")
  let p2Damage = document.getElementsByClassName("battleIcons2")
  p2Damage[0].classList.remove("pain")
}
)
function p2Pain(){
  let p2Damage = document.getElementsByClassName("battleIcons2")
    p2Damage[0].classList.add("pain")
    playSound()
}
  //EVENT LISTENERS FOR ALL MOVES
  document.getElementById("moveset1").addEventListener("click", () =>{
  
    player1.move1()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset2").addEventListener("click", () =>{
    //astonish()
    player1.move2()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset3").addEventListener("click", () =>{
    //shadowsneak()
    player1.move3()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset4").addEventListener("click", () =>{
    player1.move4()
    if (missed === false) {p2Pain()}
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset5").addEventListener("click", () =>{
    player2.move1()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset6").addEventListener("click", () =>{
    player2.move2()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset7").addEventListener("click", () =>{
    player2.move3()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset8").addEventListener("click", () =>{
    player2.move4()
    if (missed === false) {p1Pain()}
    disableMoves5To8()
    gameIsOver()
  })
  }
  if (currPlayer === 'Player2' && player1.pokemon!=raikou) {
  player2Choice.innerText = `Trainer 2 chose ${raikou.name}`
  //Player 2 starter properties
  player2.player = 'Player2'
  player2.pokemon = raikou
  player2.name = player2.pokemon.name
  player2.hp=player2.pokemon.hp
  //Inheritance of moveset from Pokemon Class
  player2.move1=player2.pokemon.weatherball2
  player2.move2=player2.pokemon.thunderbolt2
  player2.move3=player2.pokemon.thunder2
  player2.move4=player2.pokemon.snarl2
  //Append fighter to selection screen
  var p2Icon = document.createElement('img')
  p2Icon.src = player2.pokemon.icon;
  p2Icon.className = "rightSelectionChar"
  document.querySelector("#rightContainer").appendChild(p2Icon)
  //Display fighter in Page2
  let fieldFighter2 = document.createElement('img')
  fieldFighter2.className = "battleIcons2";
  fieldFighter2.src = player2.pokemon.icon;
  document.querySelector("#page2").appendChild(fieldFighter2)
  currPlayer = null 
  ////Sets player selection to null until the next stage of game, prevents appending infinite Pokemon images
  }
  if (player1.pokemon === null || player2.pokemon === null) {
    document.getElementById("startButton").disabled=true;
  } else {
  //Start Game is ENABLED
  //Action Buttons inherit their names from player 1 and player

// convert()
    document.getElementById("startButton").disabled=false;}
}