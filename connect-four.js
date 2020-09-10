window.addEventListener("DOMContentLoaded", event => {
let game = undefined;


class Game {
    constructor(player1, player2, gameName) {
        this.player1 = player1;
        this.player2 = player2;
        this.gameName = gameName;
    }
}

let player1 = document.getElementById("player-1-name");
let player2 = document.getElementById("player-2-name");

class 

player1.addEventListener("keyup", (event) => {
    if (player1.value && player2.value) {
        document.getElementById("new-game").disabled = false;
    }
});
player2.addEventListener("keyup", (event) => {
    if (player1.value && player2.value) {
        document.getElementById("new-game").disabled = false;
    }
});


});
