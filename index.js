//PAGE 1

let currPlayer = 'Player1'
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
  constructor(name, hp, icon, player,moveset = []) {
    this.player = player
    this.name = name
    this.hp = hp
    this.icon = icon
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


function gameIsOver() {
if (health2.value === 0 ) {
window.alert('Player 1 won');
} else if (health1.value === 0) {
  window.alert('Player 2 won')
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
//Damians Code -----------------------------------------------

//Box 1: Haunter
function haunterSelect()  {
  if (currPlayer === 'Player1') {
  player1Choice.innerText = `You chose ${haunter.name}`
  player1.pokemon=haunter
  player1.player='Player1'
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
    gameIsOver()
  })
  document.getElementById("moveset2").addEventListener("click", () =>{
    astonish()
    gameIsOver()
  })
  document.getElementById("moveset3").addEventListener("click", () =>{
    shadowsneak()
    gameIsOver()
  })
  document.getElementById("moveset4").addEventListener("click", () =>{
    shadowclaw()
    gameIsOver()
  })
  document.getElementById("moveset5").addEventListener("click", () =>{
    sing()
    gameIsOver()
  })
  document.getElementById("moveset6").addEventListener("click", () =>{
    strength()
    gameIsOver()
  })
  document.getElementById("moveset7").addEventListener("click", () =>{
    smack()
    gameIsOver()
  })
  document.getElementById("moveset8").addEventListener("click", () =>{
    bonk()
    gameIsOver()
  })
  //end of damians code===============================================
  }
  if (currPlayer === 'Player2' && player1.pokemon!=haunter) {
  player2Choice.innerText = `You chose ${haunter.name}`
  Player2.player = 'Player2'
  player2.pokemon = haunter
  }
}


//Box 2: JigglyPuff
function jigglyPuffSelect() {
  if (currPlayer === 'Player1') {
  player1Choice.innerText = `You chose ${jigglyPuff.name}`
  player1.pokemon=jigglyPuff
  player1.player='Player1'
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
  
  //damians code end ============================================
}
  if (currPlayer === 'Player2' && player1.pokemon!=jigglyPuff) {
  player2Choice.innerText = `You chose ${jigglyPuff.name}`
  player2.pokemon = jigglyPuff
  player2.player = 'Player2'

  }
}

const jigglyPuff = new Pokemon('Jigglypuff', 200, false, "https://archives.bulbagarden.net/media/upload/6/6d/Spr_5b_093.png") 
const haunter = new Pokemon('Haunter', 200, false, "https://archives.bulbagarden.net/media/upload/f/fc/Spr_2c_039.png")

let player1Choice = document.getElementById("player1Choice")
document.getElementById("char1").addEventListener("click", haunterSelect)


let player2Choice = document.getElementById("player2Choice")
document.getElementById("char2").addEventListener("click", jigglyPuffSelect)


