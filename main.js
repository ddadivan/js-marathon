
const arena = document.querySelector('.arenas');
const controlArena = arena.querySelector('.control');
const randomBtn = document.querySelector('.button');
const form = document.querySelector('form.control');

const playerFirst = {
    name: 'Scorpion',
    player: 1,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['hand', 'leg','head'],
    elHp,
    changeHP,
    renderHp,
    attack
}


const playerSecond = {
    name: 'Kitana',
    player: 2,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['hand', 'leg','head'],
    elHp,
    changeHP,
    renderHp,
    attack
}

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

function createElement(tag, className) {
    const $tag = document.createElement(tag);

    if(className) {
        $tag.classList.add(className);
    }

    return $tag;
}

function attack() {
    console.log(this.name + ' ' + 'Fight');
}

function elHp() {
    return document.querySelector('.player'+this.player+' .life');
}

function changeHP(randomNumber) {
    this.hp -= randomNumber;

    if(this.hp <= 0) {
        this.hp = 0;
    }
}

function renderHp() {
    this.elHp().style.width = this.hp + '%';
}



function createPlayer(obj) {
    let elem = document.createElement('div');
    elem.classList.add('player' + obj.player);
    elem.innerHTML = `
        <div class="progressbar">
            <div class="life" style="width: 100%;"></div>
            <div class="name">${obj.name}</div>
        </div>
        <div class="character">
            <img src="${obj.img}" alt="${obj.name}">
        </div>
    `;

    return elem;
}

// function changeHP(player) {
//     const playerLife = document.querySelector('.player' + player.player + ' .life');
//     player.hp -= randomNum();
//
//
//     if(player.hp <= 0) {
//        player.hp = 0;
//     }
//
//     playerLife.style.width = player.hp + '%';
// }

function playerWins(name) {
    const loseTitle = createElement('div', 'loseTitle');

    if(name) {
        loseTitle.innerText = name + ' wins';
    } else {
        loseTitle.innerText = 'Draw';
    }



    return loseTitle;
}

function randomNum() {
    let randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}

function getRandom(num) {
    return Math.ceil(Math.random() * num);
}

function createReloadButton() {
    const wrapReloadBtn = document.createElement('div');
    wrapReloadBtn.classList.add('reloadWrap');
    const reloadBtn = document.createElement('button');
    reloadBtn.classList.add('button');
    reloadBtn.textContent = 'Restart';
    wrapReloadBtn.append(reloadBtn);
    controlArena.append(wrapReloadBtn);

    reloadBtn.addEventListener('click', function(e) {
        window.location.reload();
    });

}

function enemyAttack() {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence
    }
}

randomBtn.addEventListener('click', function () {
    changeHP(playerFirst);
    changeHP(playerSecond);

    if(playerFirst.hp === 0 || playerSecond === 0) {
        randomBtn.disabled = true;
    }

    if(playerFirst.hp === 0 && playerFirst.hp < playerSecond.hp) {
        arena.append(playerWins(playerSecond.name));
        randomBtn.style = 'display: none;'
        createReloadButton();
    } else if(playerSecond.hp === 0 && playerSecond.hp < playerFirst.hp) {
        arena.append(playerWins(playerFirst.name));
        randomBtn.style = 'display: none;'
        createReloadButton();
    } else if (playerFirst.hp === 0 && playerSecond.hp === 0) {
        arena.append(playerWins());
        randomBtn.style = 'display: none;'
        createReloadButton();
    }

});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const enemy = enemyAttack();

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

});

arena.appendChild(createPlayer(playerFirst));
arena.appendChild(createPlayer(playerSecond));



