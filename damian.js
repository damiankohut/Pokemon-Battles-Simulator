document.getElementById("movesets").style.display = 'none';
document.getElementById("winner-message").style.display = 'none';

//---------------------------------------------------------------------------------------------
let turnOfPlayer = 1;
if (turnOfPlayer == 1) {
    document.getElementById("shadowball").disabled = true;
    document.getElementById("astonish").disabled = true;
    document.getElementById("shadowsneak").disabled = true;
    document.getElementById("shadowclaw").disabled = true;
    turnOfPlayer = 0;
}
else {
    document.getElementById("b1").value = "0";
    document.getElementById("b1").disabled = true;
    turnOfPlayer = 1;
}
}
