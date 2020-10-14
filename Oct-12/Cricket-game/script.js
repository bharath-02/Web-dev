var Game = /** @class */ (function () {
    function Game() {
        this.team = [];
        this.team.push(new Team("CSK"));
        this.team.push(new Team("MI"));
        this.currentTeam = this.team[0];
    }
    return Game;
}());
var Team = /** @class */ (function () {
    function Team(name) {
        this.players = [];
        this.score = 0;
        this.name = name;
        for (var index = 1; index <= 11; index++) {
            this.players.push(new Player("Player" + index));
        }
    }
    return Team;
}());
var Player = /** @class */ (function () {
    function Player(name) {
        this.numberOfBalls = 0;
        this.name = name;
    }
    return Player;
}());
var game = new Game();
console.log(game);
