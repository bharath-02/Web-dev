var startGame = false;
var currRow = 1, currCol = 1;
var startGameButton = document.querySelector('#start');
var cskHit = document.querySelector("#csk-hit");
var miHit = document.querySelector("#mi-hit");
var winnerDetails = document.querySelector("#winner-details");
var cskScore = 0, miScore = 0;
var cskPlayer = 0, miPlayer = 0;
var scoreBoard = {
    0: 'Team',
    1: 'B1',
    2: 'B2',
    3: 'B3',
    4: 'B4',
    5: 'B5',
    6: 'B6',
    7: 'Total'
};
var createBoardDiv = function (row, col, teamName) {
    var element;
    if (col === 0 || col === 7) {
        element = document.createElement('div');
        element.setAttribute('class', 'col-3');
    }
    else {
        element = document.createElement('div');
        element.setAttribute('class', 'col-1');
    }
    element.setAttribute("row", row.toString());
    element.setAttribute("col", col.toString());
    element.setAttribute("teamName", teamName.split(" ").join(""));
    if (row === 0 && col === 0) {
        element.innerHTML = teamName;
    }
    else if (row === 0) {
        element.innerHTML = scoreBoard[col];
    }
    else if (col === 0) {
        element.innerHTML = "Player " + row;
    }
    return element;
};
var Game = /** @class */ (function () {
    function Game() {
        this.team = [];
        startGameButton.setAttribute("disabled", 'true');
        (currRow = 1), (currCol = 1);
        this.team.push(new Team("CSK"));
        this.team.push(new Team("MI"));
        this.displayTeam(this.team[0].name, "CSK");
        this.displayTeam(this.team[1].name, "MI");
        this.startTimer();
    }
    Game.prototype.displayTeam = function (name, id) {
        var displayElement = document.querySelector("#" + id);
        displayElement.innerHTML = "";
        for (var i = 0; i < 11; i++) {
            var row = document.createElement('div');
            row.setAttribute('class', 'row');
            for (var j = 0; j < 8; j++) {
                var col = createBoardDiv(i, j, name);
                row.append(col);
            }
            displayElement.append(row);
        }
    };
    Game.prototype.startTimer = function () {
        var _this = this;
        var timer = document.querySelector('#timer');
        var resultGenerate = document.querySelector('#result');
        resultGenerate.setAttribute('disabled', 'true');
        miHit.setAttribute('disabled', 'true');
        this.currentTeam = this.team[0];
        var time = 1;
        var interval = setInterval(function () {
            timer.innerHTML = (time++).toString();
            if (time === 31) {
                (currRow = 1), (currCol = 1);
                cskHit.setAttribute('disabled', 'true');
                miHit.removeAttribute('disabled');
                _this.currentTeam = _this.team[1];
            }
            else if (time === 61) {
                cskHit.setAttribute('disabled', 'true');
                miHit.setAttribute('disabled', 'true');
                resultGenerate.removeAttribute('disabled');
                startGame = false;
                _this.currentTeam = null;
                clearInterval(interval);
            }
        }, 1000);
    };
    return Game;
}());
var Team = /** @class */ (function () {
    function Team(name) {
        this.players = new Array(10);
        this.score = 0;
        this.name = name;
        for (var index = 1; index < 11; index++) {
            var currPlayer = new Player("Player " + index);
            this.players[index - 1] = currPlayer;
        }
    }
    return Team;
}());
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
    }
    return Player;
}());
var score1 = 0, score2 = 0;
var game;
var totalScore;
var updateScore = function (score, id) {
    var scoreId = id === 'CSK' ? 'csk-score' : 'mi-score';
    var updatedScore = document.querySelector("#" + scoreId);
    var currScore = parseInt(updatedScore.innerHTML);
    updatedScore.innerHTML = (currScore + score).toString();
};
var updatePlayerScore = function (score, row, name) {
    var updatedScore = (document.querySelector("[teamname=\"" + name + "\"][row=\"" + currRow + "\"][col=\"7\"]"));
    var currScore = updatedScore.innerHTML;
    if (!currScore) {
        totalScore = score;
    }
    else {
        totalScore += score;
    }
    if (name === 'CSK') {
        if (cskScore < totalScore) {
            cskScore = Math.max(cskScore, totalScore);
            cskPlayer = row;
        }
    }
    else {
        if (miScore < totalScore) {
            miScore = Math.max(miScore, totalScore);
            miPlayer = row;
        }
    }
    updatedScore.innerHTML = totalScore.toString();
};
var battingSide = function (team) {
    var name = team.name.split(' ').join('');
    var currBox = (document.querySelector("[teamname=\"" + name + "\"][row=\"" + currRow + "\"][col=\"" + currCol + "\"]"));
    var run = Math.floor(Math.random() * 7);
    if (currRow <= 10) {
        updateScore(run, team.name);
        updatePlayerScore(run, currRow, name);
        currBox.innerHTML = run.toString();
        if (run === 0) {
            currRow++;
            currCol = 1;
        }
        else {
            if (currCol === 6) {
                currRow++;
                currCol = 1;
            }
            else {
                currCol++;
            }
        }
    }
};
document.querySelector("#start").addEventListener('click', function () {
    var cskScor = document.querySelector("#csk-score");
    var miscor = document.querySelector("#mi-score");
    cskScor.innerHTML = '';
    miscor.innerHTML = '';
    cskScor.innerHTML = '0';
    miscor.innerHTML = '0';
    if (!startGame) {
        game = new Game();
        (currRow = 1), (currCol = 1);
        var cskHit_1 = document.querySelector("#csk-hit");
        var miHit_1 = document.querySelector("#mi-hit");
        generateResult.setAttribute("disabled", "true");
        winnerDetails.innerHTML = '';
        cskHit_1.removeAttribute("disabled");
        cskHit_1.addEventListener("click", function () {
            battingSide(game.currentTeam);
        });
        miHit_1.addEventListener("click", function () {
            battingSide(game.currentTeam);
        });
    }
});
var generateResult = document.querySelector("#result");
generateResult.addEventListener("click", function () {
    var row1 = document.createElement('div');
    row1.setAttribute('class', 'row');
    var row2 = document.createElement('div');
    row2.setAttribute('class', 'col-12');
    var row3 = document.createElement('div');
    row3.setAttribute('class', 'col-12');
    var row4 = document.createElement('div');
    row4.setAttribute('class', 'col-12');
    var row5 = document.createElement('div');
    row5.setAttribute('class', 'col-12');
    var row6 = document.createElement('div');
    row6.setAttribute('class', 'col-12');
    row3.innerHTML = "MAN OF THE MATCH";
    var score1 = parseInt(document.querySelector("#csk-score").innerHTML);
    var score2 = parseInt(document.querySelector("#mi-score").innerHTML);
    if (score1 > score2) {
        row2.innerHTML = "MATCH WON BY CSK";
        row4.innerHTML = "PLAYER " + cskPlayer;
        row5.innerHTML = "CSK";
        row6.innerHTML = "SCORE " + cskScore;
    }
    else {
        row2.innerHTML = "MATCH WON BY MI";
        row4.innerHTML = "PLAYER " + miPlayer;
        row5.innerHTML = "MI";
        row6.innerHTML = "SCORE " + miScore;
    }
    row1.append(row2, row3, row4, row5, row6);
    winnerDetails.append(row1);
    startGameButton.removeAttribute("disabled");
    (cskScore = 0), (miScore = 0);
});
