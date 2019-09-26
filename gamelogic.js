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
var player2

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
    var scoreBoard = [player1.score, player2.score]
    document.getElementById("welcome-message").innerHTML = welcomeMessage;
    document.getElementById("scoreboard").innerHTML = scoreBoard;
    document.getElementById("tic-tac-toe").style.display = "grid";
    document.getElementById("welcome-image").style.display = "block";
}

function detectMove(id){
    moveTracker += 1; //track the move
    if (moveTracker % 2 != 0){// if odd
        //notes: player1 is always gonna have the odd moves. If move #  % 2 is not =  0 assign that move to player1
        var example = document.getElementById(id);
        example.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        player1.moves.push(id)
        detectWin()
    }
    else{ 
        //assign move to player2
        var example = document.getElementById(id);
        example.style.backgroundColor = "red";
        player2.moves.push(id)
        detectWin()
    }
    
}

function detectWin(){
    document.getElementById("winner").innerHTML = "is this working lul"
    for (i = 0; i < allwins.length; i++){
        console.log(allwins[i])
        console.log(player1.moves)
        if (player1.moves == allwins[i]){ //has to be contain cos does the order matter
            document.getElementById("winner").innerHTML = player1.name+" wins"
            break
        }
        else if (player2.moves == allwins[i]){
            document.getElementById("winner").innerHTML = player2.name+" wins"
            break
        }
    }
}