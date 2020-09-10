import { Game } from './game.js';
const clickTarget = document.getElementById("click-targets")

let game = undefined;

function updateUI() {
    if (game === undefined){
        document.getElementById("board-holder").classList.add("is-invisible");
    } else if (game !== undefined) {
        document.getElementById("board-holder").classList.remove("is-invisible");
        document.getElementById("game-name").innerHTML = game.getName();
        if (game.playerTracker === 1) {
            clickTarget.classList.remove('red');
            clickTarget.classList.add('black')
        } else if (game.playerTracker === 2) {
            clickTarget.classList.remove('black')
            clickTarget.classList.add('red')
        }
    }
}

window.addEventListener("DOMContentLoaded", event => {

let player1Input = document.getElementById("player-1-name");
let player2Input = document.getElementById("player-2-name");
let buttonVariable = document.getElementById("new-game");

function enableButton() {
    if (player1Input.value && player2Input.value) {
        buttonVariable.disabled = false;
    }
}

player1Input.addEventListener("keyup", (event) => {
    enableButton();
});
player2Input.addEventListener("keyup", (event) => {
    enableButton();
});

buttonVariable.addEventListener("click", (event) => {
    game = new Game(player1Input.value, player2Input.value);
    player1Input.value = '';
    player2Input.value = '';
    enableButton();
    updateUI();
});

document.getElementById("click-targets").addEventListener("click", (event) => {
    game.playInColumn();
    updateUI();
})



});
