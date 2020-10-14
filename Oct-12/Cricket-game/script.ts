class Game {
    team: Array<Team>=[];
    winningTeam;
    manOfTheMatch;
    currentTeam:Team;
    constructor() {
        this.team.push(new Team("CSK"));
        this.team.push(new Team("MI"));
        this.currentTeam = this.team[0];
    }

}

class Team {
    name;
    players: Array<Player> = [];
    score: number = 0;
    constructor(name: string) {
        this.name = name;
        for(let index=1; index<=11; index++) {
            this.players.push(new Player(`Player${index}`));
        }
    }
}

class Player {
    name: string;
    score: [null,null,null,null,null,null];
    numberOfBalls: number = 0;
    constructor(name: string) {
        this.name= name;
    }
}

let game= new Game();
console.log(game);