var moveTracker = 0;
var winCombos = [];
class Player {
    constructor(name) {
    this.name = name;
    this.score = 0;
    this.moves = [];
    }
}

function gameIntro(){
    var player1 = new Player(document.getElementById("player-one").value);
    var player2 = new Player(document.getElementById("player-two").value);
    var welcomeMessage = player1.name+" (blue) & "+player2.name+" (red), welcome to Tic-Tac-Toe"
    var scoreBoard = [player1.score, player2.score]
    document.getElementById("welcome-message").innerHTML = welcomeMessage;
    document.getElementById("scoreboard").innerHTML = scoreBoard;
    document.getElementById("tic-tac-toe").style.display = "grid";
}

function detectMove(id){
    moveTracker += 1; //track the move
    if (moveTracker % 2 != 0){// if odd
        //notes: player1 is always gonna have the odd moves. If move #  % 2 is not =  0 assign that move to player1
        var example = document.getElementById(id);
        example.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        player1.moves.push(id)
    }
    else{ 
        //assign move to player2
        var example = document.getElementById(id);
        example.style.backgroundColor = "red";
    }
}

function detectWin(){

}