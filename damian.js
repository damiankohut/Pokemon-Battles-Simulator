document.getElementById("movesets").style.display = 'none';
document.getElementById("winner-message").style.display = 'none';

//---------------------------------------------------------------------------------------------

// if (turnOfPlayer == 1) {
//     document.getElementById("shadowball")
//     document.getElementById("astonish")
//     document.getElementById("shadowsneak")
//     document.getElementById("shadowclaw")
//     turnOfPlayer = 0;
// }
// else {
//     document.getElementById("b1")
//     document.getElementById("b1")
//     turnOfPlayer = 1;
// }



let health2 = document.getElementById("health2")
let health1 = document.getElementById("health1")

let turnOfPlayer = 1
function shadowball(){
    health2.value -= 10;
    turnOfPlayer = 0 
}
function astonish(){
    health2.value -= 15;
    turnOfPlayer = 0
}
function shadowsneak(){
    health2.value -= 17;
    turnOfPlayer = 0
}
function shadowclaw(){
    health2.value -= 20;
    turnOfPlayer = 0
}

function sing (){
    health1.value -= 10;
    turnOfPlayer = 1
}
function strength(){
    health1.value -= 14;
    turnOfPlayer = 1
}
function smack(){
    health1.value -= 16;
    turnOfPlayer = 1
}
function bonk(){
    health1.value -= 24;
    turnOfPlayer = 1
}

// player1 chose jiggly puff functions
function shadowball1(){
    health1.value -= 10;
    turnOfPlayer = 0 
}
function astonish1(){
    health1.value -= 15;
    turnOfPlayer = 0
}
function shadowsneak1(){
    health1.value -= 17;
    turnOfPlayer = 0
}
function shadowclaw1(){
    health1.value -= 20;
    turnOfPlayer = 0
}

function sing1 (){
    health2.value -= 10;
    turnOfPlayer = 1
}
function strength1(){
    health2.value -= 14;
    turnOfPlayer = 1
}
function smack1(){
    health2.value -= 16;
    turnOfPlayer = 1
}
function bonk1(){
    health2.value -= 24;
    turnOfPlayer = 1
}

function restartGame(){
    health2.value = 200
    health1.value = 200
}