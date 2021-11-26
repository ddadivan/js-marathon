import Game from './game.js';
import {playerFirst, playerSecond} from './player.js';
import {showresult} from './results.js';
import {generateLogs} from './logs.js';
import getRandom from './random.js';
import createPlayer from './createPlayer.js';

const game = new Game();

game.start();

const arena = document.querySelector('.arenas');

const form = document.querySelector('form.control');

const HIT = {
    head: 30,
    body: 25,
    foot: 20
}
const ATTACK = ['head', 'body', 'foot'];

function enemyAttack() {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence
    }
}

function playerAttack() {
    const attack = {};

    for(let item of form) {
        if(item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;
        }

        if(item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }

        item.checked = false;
    }

    return attack;
}

//generateLogs('start', playerSecond, playerFirst);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const enemy = enemyAttack();
    const player = playerAttack();

    if(player.defence !== enemy.hit) {
        playerFirst.changeHP(enemy.value);
        playerFirst.renderHp();
        generateLogs('hit', playerSecond, playerFirst);
    }

    if(enemy.defence !== player.hit) {
        playerSecond.changeHP(player.value);
        playerSecond.renderHp();
        generateLogs('hit', playerFirst, playerSecond);
    }

    showresult();

});


arena.appendChild(createPlayer(playerFirst));
arena.appendChild(createPlayer(playerSecond));