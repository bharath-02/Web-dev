var startGame = false;
var currRow = 1, currCol = 1;
var startGameButton = <HTMLButtonElement>document.querySelector('#start');
var cskHit = <HTMLButtonElement>document.querySelector("#csk-hit");
var miHit = <HTMLButtonElement>document.querySelector("#mi-hit");
var winnerDetails = <HTMLDivElement>document.querySelector("#winner-details");
var cskScore=0, miScore=0;
var cskPlayer=0, miPlayer=0;

var scoreBoard = {
    0 : 'Team',
    1 : 'B1',
    2 : 'B2',
    3 : 'B3',
    4 : 'B4',
    5 : 'B5',
    6 : 'B6',
    7 : 'Total'
};

let createBoardDiv = (row, col, teamName) => {
    let element;
    if (col === 0 || col === 7) {
      element = document.createElement('div');
      element.setAttribute('class','col-3');
    } else {
      element = document.createElement('div');
      element.setAttribute('class','col-1');
    }
    element.setAttribute("row", row.toString());
    element.setAttribute("col", col.toString());
    element.setAttribute("teamName", teamName.split(" ").join(""));
    if (row === 0 && col === 0) {
      element.innerHTML = teamName;
    } else if (row === 0) {
      element.innerHTML = scoreBoard[col];
    } else if (col === 0) {
      element.innerHTML = `Player ${row}`;
    }
    return element;
  };

class Game {
    team: Array<Team>=[];
    currentTeam:Team;

    constructor() {
        startGameButton.setAttribute("disabled",'true');
        (currRow = 1), (currCol = 1);
        this.team.push(new Team("CSK"));
        this.team.push(new Team("MI"));
        this.displayTeam(this.team[0].name, "CSK");
        this.displayTeam(this.team[1].name, "MI");
        this.startTimer();
    }

    displayTeam(name , id) {
        var displayElement = <HTMLDivElement>document.querySelector(`#${id}`);
        displayElement.innerHTML = "";
        for(var i=0;i<11;i++) {
            var row = document.createElement('div');
            row.setAttribute('class','row');
            for(var j=0;j<8;j++) {
                var col = createBoardDiv(i, j, name);
                row.append(col);
            }
            displayElement.append(row);
        }
    }

    startTimer() {
        var timer = <HTMLDivElement>document.querySelector('#timer');
        var resultGenerate = <HTMLButtonElement>document.querySelector('#result');
        resultGenerate.setAttribute('disabled','true');
        miHit.setAttribute('disabled','true');
        this.currentTeam = this.team[0];
        var time = 1;
        var interval = setInterval(() => {
            timer.innerHTML = (time++).toString();
            if(time===31) {
                (currRow = 1), (currCol = 1);
                cskHit.setAttribute('disabled','true');
                miHit.removeAttribute('disabled');
                this.currentTeam = this.team[1];
            }
            else if(time===61) {
                cskHit.setAttribute('disabled','true');
                miHit.setAttribute('disabled','true');
                resultGenerate.removeAttribute('disabled');
                startGame = false;
                this.currentTeam = null;
                clearInterval(interval);
            }
        }, 1000);
    }
}

class Team {
    name : string;
    players: Array<Player> = new Array(10);
    score: number = 0;
    constructor(name: string) {
        this.name = name;
        for(let index=1; index<11; index++) {
            var currPlayer = new Player(`Player ${index}`);
            this.players[index-1] = currPlayer;
        }
    }
}

class Player {
    name: string;
    score: number;
    constructor(name: string) {
        this.name= name;
    }
}

var score1=0, score2=0;
var game;
var totalScore;
var updateScore = (score, id) => {
    var scoreId = id==='CSK' ? 'csk-score' : 'mi-score';
    var updatedScore = <HTMLDivElement>document.querySelector(`#${scoreId}`);
    var currScore = parseInt(updatedScore.innerHTML);
    updatedScore.innerHTML = (currScore + score).toString();
};

var updatePlayerScore = (score, row, name) => {
    let updatedScore = <HTMLDivElement>(document.querySelector(`[teamname="${name}"][row="${currRow}"][col="7"]`));
    let currScore = updatedScore.innerHTML;
    if(!currScore) {
        totalScore=score;
    }
    else {
        totalScore+=score;
    }
    if(name==='CSK') {
        if(cskScore < totalScore) {
            cskScore = Math.max(cskScore, totalScore);
            cskPlayer = row;
        }
    }
    else {
        if(miScore < totalScore) {
            miScore = Math.max(miScore, totalScore);
            miPlayer = row;
        }
    }
    updatedScore.innerHTML = totalScore.toString();
};

let battingSide = (team) => {
    let name = team.name.split(' ').join('');
    let currBox = <HTMLDivElement>(document.querySelector(`[teamname="${name}"][row="${currRow}"][col="${currCol}"]`));
    let run = Math.floor(Math.random() * 7);
    if(currRow <= 10) {
        updateScore(run, team.name);
        updatePlayerScore(run, currRow, name);
        currBox.innerHTML = run.toString();
        if(run === 0) {
            currRow++;
            currCol=1;
        }
        else {
            if(currCol === 6) {
                currRow++;
                currCol=1;
            }
            else {
                currCol++;
            }
        }
    }
};

(<HTMLButtonElement>document.querySelector("#start")).addEventListener('click', () => {
    let cskScor = <HTMLDivElement>document.querySelector("#csk-score");
    let miscor = <HTMLDivElement>document.querySelector("#mi-score");
    cskScor.innerHTML = '';
    miscor.innerHTML = '';
    cskScor.innerHTML = '0';
    miscor.innerHTML = '0';

    if(!startGame) {
        game = new Game();
        (currRow = 1), (currCol = 1);
        let cskHit = document.querySelector("#csk-hit");
        let miHit = document.querySelector("#mi-hit");
        generateResult.setAttribute("disabled", "true");
        winnerDetails.innerHTML = '';
        cskHit.removeAttribute("disabled");
        cskHit.addEventListener("click", () => {
            battingSide(game.currentTeam);
        });
        miHit.addEventListener("click", () => {
            battingSide(game.currentTeam);
        });
    }
});
let generateResult = <HTMLButtonElement>document.querySelector("#result");
generateResult.addEventListener("click", () => {
    let row1 = document.createElement('div');
    row1.setAttribute('class','row');
    let row2 = document.createElement('div');
    row2.setAttribute('class','col-12');
    let row3 = document.createElement('div');
    row3.setAttribute('class','col-12');
    let row4 = document.createElement('div');
    row4.setAttribute('class','col-12');
    let row5 = document.createElement('div');
    row5.setAttribute('class','col-12');
    let row6 = document.createElement('div');
    row6.setAttribute('class','col-12');
    row3.innerHTML = "MAN OF THE MATCH";
    let score1 = parseInt((<HTMLDivElement>document.querySelector("#csk-score")).innerHTML);
    let score2 = parseInt((<HTMLDivElement>document.querySelector("#mi-score")).innerHTML);
    if(score1 > score2) {
        row2.innerHTML = "MATCH WON BY CSK";
        row4.innerHTML = `PLAYER ${cskPlayer}`;
        row5.innerHTML = "CSK";
        row6.innerHTML = `SCORE ${cskScore}`;
    }
    else {
        row2.innerHTML = "MATCH WON BY MI";
        row4.innerHTML = `PLAYER ${miPlayer}`;
        row5.innerHTML = "MI";
        row6.innerHTML = `SCORE ${miScore}`;
    }
    row1.append(row2, row3, row4, row5, row6);
    winnerDetails.append(row1);
    startGameButton.removeAttribute("disabled");
    (cskScore = 0), (miScore = 0);
});