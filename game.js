export class Game {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.playerTracker = 1;
    }

    getName(){
        return `${this.name1} vs. ${this.name2}`;
    }

    playInColumn() {
        if (this.playerTracker === 1){
            this.playerTracker = 2;
        } else {
            this.playerTracker = 1;
        }
    }
}
