import { Game } from './game.js';
import { Column } from './columns.js';
const clickTarget = document.getElementById("click-targets")

let game = undefined;

function updateUI() {
    if (game === undefined){
        document.getElementById("board-holder").classList.add("is-invisible");
    } else if (game !== undefined) {
        document.getElementById("board-holder").classList.remove("is-invisible");
        document.getElementById("game-name").innerHTML = game.getName();


        for (let rowIndex = 0; rowIndex <= 5; rowIndex += 1) {
            for (let columnIndex = 0; columnIndex <= 6; columnIndex += 1){
                const square = document.querySelector(`#square-${rowIndex}-${columnIndex}`);
                square.innerHTML = '';

                const playerNumber = game.getTokenAt(rowIndex, columnIndex);
                if (playerNumber === 1) {
                    const token = document.createElement('div');
                    token.classList.add('token');
                    token.classList.add('black');
                    square.appendChild(token);
                } else if (playerNumber === 2) {
                    const token = document.createElement('div');
                    token.classList.add('token');
                    token.classList.add('red');
                    square.appendChild(token);
                }
            }
        }

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
    const targetId = event.target.id;
    if (!targetId.startsWith('column-')) return;

    const columnIndex = Number.parseInt(targetId[targetId.length -1]);
    
    game.playInColumn();
    updateUI();
})



});
