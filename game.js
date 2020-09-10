import { Column } from "./columns.js";

export class Game {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.playerTracker = 1;
        this.columns = [
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
        ];
    }

    getName(){
        return `${this.name1} vs. ${this.name2}`;
    }

    getTokenAt(rowIndex, columnIndex){
        return this.columns[columnIndex].getTokenAt(rowIndex);
    }
    playInColumn(columnIndex) {
        this.columns[columnIndex].add(game.playerTracker);

        if (this.playerTracker === 1){
            this.playerTracker = 2;
        } else {
            this.playerTracker = 1;
        }
    }
}
