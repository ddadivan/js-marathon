
const arena = document.querySelector('.arenas');
const randomBtn = document.querySelector('.button');

const playerFirst = {
    name: 'Scorpion',
    player: 1,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['hand', 'leg','head'],
    attack: function () {
        console.log(`${this.name} fight`);
    }
}


const playerSecond = {
    name: 'Kitana',
    player: 2,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['hand', 'leg','head'],
    attack: function () {
        console.log(`${this.name} fight`);
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);

    if(className) {
        $tag.classList.add(className);
    }

    return $tag;
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

function changeHP(player) {
    const playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= randomNum();
    playerLife.style.width = player.hp + '%';

    if(player.hp < 0) {
        arena.appendChild(playerLose(player.name));
        randomBtn.disabled = true;
    }
}

function playerLose(name) {
    const loseTitle = createElement('div', 'loseTitle');

    loseTitle.innerText = name + ' lose';

    return loseTitle;
}

function randomNum() {
    let randomNumber = Math.floor(Math.random() * 20);
    return randomNumber;
}

randomBtn.addEventListener('click', function () {
    changeHP(playerFirst);
    changeHP(playerSecond);

});

arena.appendChild(createPlayer(playerFirst));
arena.appendChild(createPlayer(playerSecond));



