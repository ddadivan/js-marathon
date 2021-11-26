import {playerFirst, playerSecond} from './player.js';
import {generateLogs} from './logs.js';
import createElement from './createElement.js';

const arena = document.querySelector('.arenas');
const randomBtn = document.querySelector('.button');

function playerWins(name) {
    const loseTitle = createElement('div', 'loseTitle');

    if(name) {
        loseTitle.innerText = name + ' wins';
    } else {
        loseTitle.innerText = 'Draw';
    }

    return loseTitle;
}

function createReloadButton() {
    const wrapReloadBtn = document.createElement('div');
    wrapReloadBtn.classList.add('reloadWrap');
    const reloadBtn = document.createElement('button');
    reloadBtn.classList.add('button');
    reloadBtn.textContent = 'Restart';
    wrapReloadBtn.append(reloadBtn);
    arena.append(wrapReloadBtn);

    reloadBtn.addEventListener('click', function(e) {
        window.location.reload();
    });

}

export function showresult() {
    if(playerFirst.hp === 0 || playerSecond === 0) {
        randomBtn.disabled = true;
    }

    if(playerFirst.hp === 0 && playerFirst.hp < playerSecond.hp) {
        arena.append(playerWins(playerSecond.name));
        randomBtn.style = 'display: none;'
        createReloadButton();
        generateLogs('end', playerSecond, playerFirst);

    } else if(playerSecond.hp === 0 && playerSecond.hp < playerFirst.hp) {
        arena.append(playerWins(playerFirst.name));
        randomBtn.style = 'display: none;'
        createReloadButton();
        generateLogs('end', playerFirst, playerSecond);

    } else if (playerFirst.hp === 0 && playerSecond.hp === 0) {
        arena.append(playerWins());
        randomBtn.style = 'display: none;'
        createReloadButton();
        generateLogs('draw', playerFirst, playerSecond);
    }
}