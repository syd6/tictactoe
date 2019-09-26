var moveTracker = 0;
var winCombo1 = ["1-1", "1-2", "1-3"];
var winCombo2 = ["2-1", "2-2", "2-3"];
var winCombo3 = ["3-1", "3-2", "3-3"];
var winCombo4 = ["1-1", "2-1", "3-1"];
var winCombo5 = ["1-2", "2-2", "3-2"];
var winCombo6 = ["1-3", "2-3", "3-3"];
var winCombo7 = ["1-1", "2-2", "3-3"];
var winCombo8 = ["1-3", "2-2", "3-1"];
var allwins = [winCombo1, winCombo2, winCombo3, winCombo4, winCombo5, winCombo6, winCombo7, winCombo8];

var player1;
var player2;

class Player {
    constructor(name) {
    this.name = name;
    this.score = 0;
    this.moves = [];
    }
}

function gameIntro(){
    player1 = new Player(document.getElementById("player-one").value);
    player2 = new Player(document.getElementById("player-two").value);
    var welcomeMessage = player1.name+" (blue) & "+player2.name+" (red), welcome to Tic-Tac-Toe"
    document.getElementById("welcome-message").innerHTML = welcomeMessage;
    updateScore();
    document.getElementById("tic-tac-toe").style.display = "grid";
}

function updateScore(){
    var scoreBoard = [player1.score, player2.score]
    document.getElementById("scoreboard").innerHTML = "SCOREBOARD: "+scoreBoard;
}

function detectMove(id){
    moveTracker += 1; //track the move
    if (moveTracker % 2 != 0){// if odd
        //notes: player1 is always gonna have the odd moves. If move #  % 2 is not =  0 assign that move to player1
        var example = document.getElementById(id);
        example.style.backgroundColor = "blue";
        player1.moves.push(id)
        //if (player1.moves.length >= 3) detectWin(player1)
        detectWin(player1)
    }
    else{ 
        //assign move to player2
        var example = document.getElementById(id);
        example.style.backgroundColor = "red";
        player2.moves.push(id)
        //if (player2.moves.length >= 3) detectWin(player2)
       detectWin(player2)
    }
}

function detectWin(player){
    for (i = 0; i < allwins.length; i++){
        /*for (move in player.moves){
            if (!allwins[i].includes(move)) return;
        }
        document.getElementById("winner").innerHTML = player.name+" wins"
        return*/
        if (JSON.stringify(player.moves) == JSON.stringify(allwins[i])){ //doesn't work if the cells are inputted out of order
            //if each thing in 
            document.getElementById("winner").innerHTML = player1.name+" wins"
            player.score += 1;
            updateScore();
            document.getElementById("new-game").style.display = "block"
        }
    }
}

function clearBoard(){
    var squares = document.getElementsByClassName("tic-tac-toe")
    for (square in squares){
        square.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    }

}

