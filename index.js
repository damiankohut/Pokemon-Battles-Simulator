document.getElementById("page2").style.display="none"
//Bugs: 
//1. Broken health bar - Health bar attack damage multiplies each reset
//CSS Border for Characters: border: 2px dotted purple;
//2. Build out Pain animation
//3. Blindspot: Consider a "draw" scenario

//Styling for Selection Screen

//Character Selection
let currPlayer = 'Player1' 
//Start Button Disabled
document.getElementById("startButton").disabled=true;




//PAGE 1
//Empty Player 1 Object--Dependent on Pokemon Class
const player1 = {
  pokemon: null,
  trainer: 'Player 1',
  move1: null,
  move2: null,
  move3: null,
  move4: null,
  hp: null
  }
//Empty Player 2 Object--Dependent on Pokemon Class
  const player2 = {
  pokemon: null,
  trainer: 'Player 2',
  move1: null,
  move2: null,
  move3: null,
  move4: null,
  hp: null
  }


  //Trainer Names
const trainer1 = document.getElementById('trainer1');
const trainer2= document.getElementById('trainer2');
trainer1.addEventListener('submit', trainer1Name())
trainer2.addEventListener('submit', trainer2Name())

function trainer1Name(){

}
function trainer2Name(){

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
    let health2 = document.getElementById("health2")
    let health1 = document.getElementById("health1")
    player1.hp=player1.pokemon.hp
    player2.hp=player2.pokemon.hp
    health1.value = player1.hp
    health2.value = player2.hp
}
    

//Start of Damian's TurnofPlayer 
let turnOfPlayer = 1

//ChangeOfTurn Function
function changeOfTurn(){
  if (turnOfPlayer === 1){
    document.getElementById('print')
        .innerHTML = "Player 1 Turn";
        
}
else if (turnOfPlayer === 2){
    document.getElementById('print')
        .innerHTML = "Player 2 Turn";
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
  constructor(name, hp, icon, backIcon, player) {
    this.player = player
    this.name = name
    this.hp = hp
    this.icon = icon
    this.backIcon = backIcon
  }

//ATTACK LIBRARY
//Damian's Attack Functions are now methods

//Player 1 Haunter 

//Doesn't affect original healtbar
shadowball(){
  let hitChance = Math.round(Math.random()*10)
  if (hitChance <= 9){
      let dmg = Math.round(Math.random()*10)+10
  dosplayer -= dmg
  if (dosplayer < 0){
      dosplayer = 0
  }
  bottomRow.innerHTML = "you hit Jigglypuff with" + dmg + "damage. JigglyPuff now has" + dosplayer + "left"
let veigHPBarWidth = (dosplayer/100)*200;
  veigHP.style.width = veigHPBarWidth + "px"
  turnOfPlayer = 2
  } else {
bottomRow.innerHTML = "you have missed"
turnOfPlayer = 2
  }
}

astonish(){
    player2.hp -=15
    health2.value = player2.hp
    turnOfPlayer = 2
    changeOfTurn()
}
shadowsneak(){
  player2.hp -=17
  health2.value = player2.hp
    turnOfPlayer = 2
    changeOfTurn()
}
shadowclaw(){
  player2.hp -=20
  health2.value = player2.hp
    turnOfPlayer = 2
    changeOfTurn()
}

//Player 1 JigglyPuff 
sing (){
  player2.hp -=10
    health2.value = player2.hp
  turnOfPlayer = 2
  changeOfTurn()
}
strength(){
  player2.hp -=14
    health2.value = player2.hp
  turnOfPlayer = 2
  changeOfTurn()
}
smack(){
  player2.hp -=16
    health2.value = player2.hp
  turnOfPlayer = 2
  changeOfTurn()
}
bonk(){
  player2.hp -=24
    health2.value = player2.hp
  turnOfPlayer = 2
  changeOfTurn()
}

// Player 2 Haunter
shadowball2(){
  player1.hp -=10
    health1.value = player1.hp
  turnOfPlayer = 1
  changeOfTurn()
}
astonish2(){
  player1.hp -=15
    health1.value = player1.hp
  turnOfPlayer = 1
  changeOfTurn()
}
shadowsneak2(){
  player1.hp -=17
    health1.value = player1.hp
  turnOfPlayer = 1
  changeOfTurn()
}
shadowclaw2(){
  player1.hp -=20
    health1.value = player1.hp
  turnOfPlayer = 1
  changeOfTurn()
}

//Player 2 JigglyPuff
sing2(){
  player1.hp -=10
  health1.value = player1.hp
    turnOfPlayer = 1
    changeOfTurn()
}
strength2(){
  player1.hp -=14
  health1.value = player1.hp
    turnOfPlayer = 1
    changeOfTurn()
}
smack2(){
  player1.hp -=16
    health1.value = player1.hp
    turnOfPlayer = 1
    changeOfTurn()
}
bonk2(){
    player1.hp -=24
    health1.value = player1.hp
    turnOfPlayer = 1
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
document.getElementById("page2").appendChild(reset)
reset.style.display = "none"
//reset.disabled=true

 
//CHARACTER SELECTION
//Damians Code -----------------------------------------------

//Box 1: Haunter
function haunterSelect()  {
  if (currPlayer === 'Player1') {
  player1Choice.innerText = `${player1.trainer} chose ${haunter.name}`
  //Starter properties for player 1 object
  player1.pokemon=haunter
  player1.player='Player1'
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

  
  //Damians code================================================
  // moveset1.innerText = "ShadowBall"
  // moveset2.innerText = "astonish"
  // moveset3.innerText = "shadowsneak"
  // moveset4.innerText = "shadowclaw"
  // moveset5.innerText = "sing"
  // moveset6.innerText = "strength"
  // moveset7.innerText = "smack"
  // moveset8.innerText = "bonk"


  //Pain Function

//Pain features --->
function p1Pain(){
  let p1Damage = document.getElementsByClassName("battleIcons1")
    p1Damage[0].classList.add("pain")
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
}
  //EVENT LISTENERS FOR ALL MOVES
  document.getElementById("moveset1").addEventListener("click", () =>{
    //shadowball()
    player1.move1()
    p2Pain()
    //Animation
    // p2Damage.forEach(el => {el.classList.add("tookAHit")})
  
    // while(health1 !== 0)
    // if(player1Turn) { //if it's player1's turn keep going with the if
    // player1Turn = !player1Turn //after click event disable player1's turn
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset2").addEventListener("click", () =>{
    //astonish()
    player1.move2()
    p2Pain()
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset3").addEventListener("click", () =>{
    //shadowsneak()
    player1.move3()
    p2Pain()
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset4").addEventListener("click", () =>{
    player1.move4()
    p2Pain()
   // shadowclaw()
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset5").addEventListener("click", () =>{
    player2.move1()
    p1Pain()
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset6").addEventListener("click", () =>{
    player2.move2()
    p1Pain()
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset7").addEventListener("click", () =>{
    player2.move3()
    p1Pain()
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset8").addEventListener("click", () =>{
    player2.move4()
    p1Pain()
    disableMoves5To8()
    gameIsOver()
  })
  //end of damians code===============================================
  }
  if (currPlayer === 'Player2' && player1.pokemon!=haunter) {
  player2Choice.innerText = `${player2.trainer} ${haunter.name}`
  //Player 2 starter properties
  player2.player = 'Player2'
  player2.pokemon = haunter
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
//Box 2: JigglyPuff
function jigglyPuffSelect() {
  if (currPlayer === 'Player1') {
  //Starter proprties for player 1 object
  player1Choice.innerText = `${player1.trainer} chose ${jigglyPuff.name}`
  player1.pokemon=jigglyPuff
  player1.player='Player1'
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
  //damians code start  ======================================
  // moveset1.innerText = "sing"
  // moveset2.innerText = "strength"
  // moveset3.innerText = "smack"
  // moveset4.innerText = "bonk"
  // moveset5.innerText = "ShadowBall"
  // moveset6.innerText = "astonish"
  // moveset7.innerText = "shadowsneak"
  // moveset8.innerText = "shadowclaw"
  document.getElementById("moveset1").addEventListener("click", () =>{
    player1.move1()
    p2Pain()
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset2").addEventListener("click", () =>{
    player1.move2()
    p2Pain()
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset3").addEventListener("click", () =>{
    player1.move3()
    p2Pain()
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset4").addEventListener("click", () =>{
    player1.move4()
    p2Pain()
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset5").addEventListener("click", () =>{
    player2.move1()
    p1Pain()
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset6").addEventListener("click", () =>{
    player2.move2()
    p1Pain()
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset7").addEventListener("click", () =>{
    player2.move3()
    p1Pain()
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset8").addEventListener("click", () =>{
    player2.move4()
    p1Pain()
    disableMoves5To8()
    gameIsOver()
  })
  //damians code end ============================================
}
  if (currPlayer === 'Player2' && player1.pokemon!=jigglyPuff) {
  player2Choice.innerText = `${player2.trainer} chose ${jigglyPuff.name}`
  //Player 2 object starter properties
  player2.pokemon = jigglyPuff
  player2.player = 'Player2'
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
//NEW Pokemon instances
const jigglyPuff = new Pokemon('Jigglypuff', 200, "images/Jiggs.gif", "images/jigglypuff-back-gif.png")
const haunter = new Pokemon('Haunter', 200, "images/haunter-front-gif.png", "images/haunter-back-gif.png")
//Event Listeners for player chocie
let player1Choice = document.getElementById("player1Choice")
document.getElementById("char1").addEventListener("click", haunterSelect)
let player2Choice = document.getElementById("player2Choice")
document.getElementById("char2").addEventListener("click", jigglyPuffSelect)

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
  turnOfPlayer = 1;
  changeOfTurn() //Resets Turn to Player 1
  resetHealth() //Resets Health
  document.getElementById("startButton").disabled=true;
  reset.style.display = "none"
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
  //Damian JS - disables movesets
  document.getElementById("moveset1").disabled = false
  document.getElementById("moveset2").disabled = false
  document.getElementById("moveset3").disabled = false
  document.getElementById("moveset4").disabled = false
  document.getElementById("moveset5").disabled = false
  document.getElementById("moveset6").disabled = false
  document.getElementById("moveset7").disabled = false
  document.getElementById("moveset8").disabled = false
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
  document.getElementById("char2").addEventListener("click", jigglyPuffSelect)
}


//GAME HAS ENDED - Player 1 or Player 2 Dies
//Large nested If-Else statement, contains every game ending scenario/reset outcome
function gameIsOver(){

if (health2.value === 0 ) {
// let replay = document.createElement("button")
// replay.className = "replay"
// replay.innerHTML="Player 1 won. Rematch?"
// document.getElementsByTagName("body").appendChild(replay)

//reset button
reset.style.display="block"
reset.style.position="absolute"
reset.style.width="40vh"
reset.style.height="40vh"
reset.style.top="50vh"
reset.style.left="50vh"
reset.innerText="Player 1 has won! Rematch?"
endOfBattle()
//event listener for reset button
reset.addEventListener("click", () => {
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


//SAME AS Before---reset functionality for if Player 2 wins

//window.alert('Player 1 won'); 
//location.reload();
} else if (health1.value === 0) {
  //window.alert('Player 2 won')
reset.style.display="block"
reset.style.position="absolute"
reset.style.width="40vh"
reset.style.height="40vh"
reset.style.top="50vh"
reset.style.left="50vh"
reset.innerText="Player 2 has won! Rematch?"
endOfBattle()

reset.addEventListener("click", () => {
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
