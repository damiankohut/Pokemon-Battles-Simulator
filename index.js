//PAGE 1
let currPlayer = 'Player1'
document.getElementById("startButton").disabled=true;

// let button = document.createElement("button");
// document.getElementById("container").appendChild(button);


//keeping track of turns below
//let player1Turn = true

//PLAYER 1 STARTS FIRST
document.getElementById("moveset5").disabled = true
document.getElementById("moveset6").disabled = true
document.getElementById("moveset7").disabled = true
document.getElementById("moveset8").disabled = true

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
  constructor(name, hp, icon, backIcon, player,moveset = []) {
    this.player = player
    this.name = name
    this.hp = hp
    this.icon = icon
    this.backIcon = backIcon
    moveset = [{
      name: "shadowball",
      dmg: 15
    },
  {
    name: "shadowclaw",
    dmg: 20
  }]
  }
//Attacks
  // shadowBall(attack,defender){
  //   defender.dmg -= 20
    //If Player 2 is equivalent to opposite type, deal more damage.
  }
const player1 = {
pokemon: null
}
const player2 = {
pokemon: null
}




//Damians code --------------------------------------
let moveset1 = document.getElementById("moveset1")
let moveset2 = document.getElementById("moveset2")
let moveset3 = document.getElementById("moveset3")
let moveset4 = document.getElementById("moveset4")

//Invisble Button
let reset = document.createElement("button")
document.getElementById("page2").appendChild(reset)
reset.style.display = "none"
//reset.disabled=true

 
//----------------------------------------
//Aldo's Dynamic code
//----------------------------------------
// function gameIsOver() {
  
// }




//Damians Code -----------------------------------------------
//Battlefield
function Battlefield(){
}
//Box 1: Haunter
function haunterSelect()  {
  if (player1.pokemon === null || player2.pokemon === null) {
    document.getElementById("startButton").disabled=true;
  } else { document.getElementById("startButton").disabled=false;}
  if (currPlayer === 'Player1') {
  player1Choice.innerText = `You chose ${haunter.name}`
  player1.pokemon=haunter
  player1.player='Player1'
  let p1Icon = document.createElement('img')
  p1Icon.src = player1.pokemon.icon;
  document.querySelector("#leftContainer").appendChild(p1Icon)
  //display player1 haunter in page2 - code start
  let haunter1ImgPage2 = document.createElement('img')
  haunter1ImgPage2.className = "haunter1ImgPage2";
  haunter1ImgPage2.src = player1.pokemon.backIcon;
  document.querySelector("#page2").appendChild(haunter1ImgPage2)
  //display player1 haunter in page2 - code end
  player2Choice.innerText = `Player 2 Select`
  currPlayer = 'Player2'
  //Damians code================================================
  moveset1.innerText = "ShadowBall"
  moveset2.innerText = "astonish"
  moveset3.innerText = "shadowsneak"
  moveset4.innerText = "shadowclaw"
  moveset5.innerText = "sing"
  moveset6.innerText = "strength"
  moveset7.innerText = "smack"
  moveset8.innerText = "bonk"
  document.getElementById("moveset1").addEventListener("click", () =>{
    shadowball()
    // while(health1 !== 0)
    // if(player1Turn) { //if it's player1's turn keep going with the if
    // player1Turn = !player1Turn //after click event disable player1's turn
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset2").addEventListener("click", () =>{
    astonish()
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset3").addEventListener("click", () =>{
    shadowsneak()
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset4").addEventListener("click", () =>{
    shadowclaw()
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset5").addEventListener("click", () =>{
    sing()
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset6").addEventListener("click", () =>{
    strength()
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset7").addEventListener("click", () =>{
    smack()
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset8").addEventListener("click", () =>{
    bonk()
    disableMoves5To8()
    gameIsOver()
  })
  //end of damians code===============================================
  }
  if (currPlayer === 'Player2' && player1.pokemon!=haunter) {
  player2Choice.innerText = `You chose ${haunter.name}`
  player2.player = 'Player2'
  player2.pokemon = haunter
  var p2Icon = document.createElement('img')
  p2Icon.src = player2.pokemon.icon;
  document.querySelector("#rightContainer").appendChild(p2Icon)
  //display player2 haunter in page2 - code start
  let haunter2ImgPage2 = document.createElement('img')
  haunter2ImgPage2.className = "haunter2ImgPage2";
  haunter2ImgPage2.src = player2.pokemon.icon;
  document.querySelector("#page2").appendChild(haunter2ImgPage2)
  //display player2 haunter in page2 - code end
  currPlayer = null ////Sets to null until the next stage of game, prevents appending infinite Pokemon images
  }
  if (player1.pokemon === null || player2.pokemon === null) {
    document.getElementById("startButton").disabled=true;
  } else {document.getElementById("startButton").disabled=false;}
}
//Box 2: JigglyPuff
function jigglyPuffSelect() {
  if (currPlayer === 'Player1') {
  player1Choice.innerText = `You chose ${jigglyPuff.name}`
  player1.pokemon=jigglyPuff
  player1.player='Player1'
  var p1Icon = document.createElement('img')
  p1Icon.src = player1.pokemon.icon;
  document.querySelector("#leftContainer").appendChild(p1Icon)
  //display player1 jigglypuff in page2 - code start
  let jigglypuff1ImgPage2 = document.createElement('img')
  jigglypuff1ImgPage2.className = "jigglypuff1ImgPage2";
  jigglypuff1ImgPage2.src = player1.pokemon.backIcon;
  document.querySelector("#page2").appendChild(jigglypuff1ImgPage2)
  //display player1 jigglypuff in page2 - code end
  player2Choice.innerText = `Player 2 Select`
  currPlayer='Player2'
  //damians code start  ======================================
  moveset1.innerText = "sing"
  moveset2.innerText = "strength"
  moveset3.innerText = "smack"
  moveset4.innerText = "bonk"
  moveset5.innerText = "ShadowBall"
  moveset6.innerText = "astonish"
  moveset7.innerText = "shadowsneak"
  moveset8.innerText = "shadowclaw"
  document.getElementById("moveset1").addEventListener("click", () =>{
    sing1()
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset2").addEventListener("click", () =>{
    strength1()
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset3").addEventListener("click", () =>{
    smack1()
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset4").addEventListener("click", () =>{
    bonk1()
    disableMoves1To4()
    gameIsOver()
  })
  document.getElementById("moveset5").addEventListener("click", () =>{
    shadowball1()
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset6").addEventListener("click", () =>{
    astonish1()
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset7").addEventListener("click", () =>{
    shadowsneak1()
    disableMoves5To8()
    gameIsOver()
  })
  document.getElementById("moveset8").addEventListener("click", () =>{
    shadowclaw1()
    disableMoves5To8()
    gameIsOver()
  })
  //damians code end ============================================
}
  if (currPlayer === 'Player2' && player1.pokemon!=jigglyPuff) {
  player2Choice.innerText = `You chose ${jigglyPuff.name}`
  player2.pokemon = jigglyPuff
  player2.player = 'Player2'
  var p2Icon = document.createElement('img')
  p2Icon.src = player2.pokemon.icon;
  document.querySelector("#rightContainer").appendChild(p2Icon)
  //display player2 jigglypuff in page2 - code start
  let jigglypuff2ImgPage2 = document.createElement('img')
  jigglypuff2ImgPage2.className = "jigglypuff2ImgPage2";
  jigglypuff2ImgPage2.src = player2.pokemon.icon;
  document.querySelector("#page2").appendChild(jigglypuff2ImgPage2)
  //display player2 jigglypuff in page2 - code end
  currPlayer=null //Sets to null until the next stage of game, prevents appending infinite Pokemon images
  }
  if (player1.pokemon === null || player2.pokemon === null) {
    document.getElementById("startButton").disabled=true;
  } else {document.getElementById("startButton").disabled=false;}
}
const jigglyPuff = new Pokemon('Jigglypuff', 200, "images/jigglypuff-front-gif.png", "images/jigglypuff-back-gif.png")
const haunter = new Pokemon('Haunter', 200, "images/haunter-front-gif.png", "images/haunter-back-gif.png")
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


let startGame = document.querySelector("#startButton")
document.getElementById("movesets").style.display = "none";
document.getElementById("winner-message").style.display = "none";

startGame.addEventListener("click", () => {
  document.getElementById("startButton").disabled=true;
  reset.style.display = "none"
  let rightContainer = document.querySelector("#rightContainer")
  rightContainer.removeChild(rightContainer.lastElementChild)
  let leftContainer = document.querySelector("#leftContainer")
  leftContainer.removeChild(leftContainer.lastElementChild)
  document.getElementById("page1").style.display = "none";
  //document.getElementById("startButton").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("title").style.display = "none";
  document.getElementById("page2").style.display = 'block';
  document.getElementById("movesets").style.display = 'block';

  restartGame() //Damian JS
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

//50% there
// //Make button disabled unless pokemon are chosen


function endOfBattle() {
  document.getElementById("moveset1").disabled = true
  document.getElementById("moveset2").disabled = true
  document.getElementById("moveset3").disabled = true
  document.getElementById("moveset4").disabled = true
  document.getElementById("moveset5").disabled = true
  document.getElementById("moveset6").disabled = true
  document.getElementById("moveset7").disabled = true
  document.getElementById("moveset8").disabled = true
  reset.style.display = "block"
  player1.pokemon=null
  player2.pokemon=null
  document.getElementById("char1").addEventListener("click", haunterSelect)
  document.getElementById("char2").addEventListener("click", jigglyPuffSelect)
}



function gameIsOver(){

if (health2.value === 0 ) {
// let replay = document.createElement("button")
// replay.className = "replay"
// replay.innerHTML="Player 1 won. Rematch?"
// document.getElementsByTagName("body").appendChild(replay)
reset.style.display="block"
reset.innerText="Hello"
endOfBattle()
reset.addEventListener("click", () => {
// if (document.getElementsByClassName("jigglypuff1ImgPage2")){
// let elements = document.getElementsByClassName("jigglypuff1ImgPage2");
// elements[0].remove();
// }
// if (document.getElementsByClassName("jigglypuff2ImgPage2")){
// let elements = document.getElementsByClassName("jigglypuff2ImgPage2");
// elements[0].remove();
// }
// if (document.getElementsByClassName("haunter1ImgPage2")){
// let elements = document.getElementsByClassName("haunter1ImgPage2");
// elements[0].remove();
// }
// if (document.getElementsByClassName("haunter2ImgPage2")){
// let elements = document.getElementsByClassName("haunter2ImgPage2");
// elements[0].remove();
// }
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
currPlayer = "Player1"
document.getElementById("reset").style.display = "none"
}
)



//window.alert('Player 1 won'); 
//location.reload();
} else if (health1.value === 0) {
  //window.alert('Player 2 won')
reset.style.display="block"
reset.innerText="Hello"
endOfBattle()
reset.addEventListener("click", () => {
  // if (document.getElementsByClassName("jigglypuff1ImgPage2")){
  //   let elements = document.getElementsByClassName("jigglypuff1ImgPage2");
  //   elements[0].remove();
  //   if (document.getElementsByClassName("jigglypuff2ImgPage2")){
  //   let elements = document.getElementsByClassName("jigglypuff2ImgPage2");
  //   elements[0].remove();
  //   }
  //   if (document.getElementsByClassName("haunter1ImgPage2")){
  //   let elements = document.getElementsByClassName("haunter1ImgPage2");
  //   elements[0].remove();
  //   }
  //   if (document.getElementsByClassName("haunter2ImgPage2")){
  //   let elements = document.getElementsByClassName("haunter2ImgPage2");
  //   elements[0].remove();
  //   }
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

  //location.reload();
} else {
  if (turnOfPlayer == 1) {
    document.getElementById('print')
        .innerHTML = "Player 1 Turn";
        
}
else {
    document.getElementById('print')
        .innerHTML = "Player 2 Turn";
}
}
}
