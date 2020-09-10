window.addEventListener("DOMContentLoaded", event => {
let game = undefined;


class Game {
    constructor(player1, player2, gameName) {
        this.player1 = player1;
        this.player2 = player2;
        this.gameName = gameName;
    }
}


document.getElementById("player-1-name").addEventListener("keyup", (event) => {
    document.getElementById("new-game").disabled = false;
});


});