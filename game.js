export class Game {
    constructor(name1, name2, gameName) {
        this.name1 = name1;
        this.name2 = name2;
        this.gameName = gameName;
    }

    getName(){
        return `${this.name1} vs. ${this.name2}`;
    }
}