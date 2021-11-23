
const arena = document.querySelector('.arenas');
const randomBtn = document.querySelector('.button');
const form = document.querySelector('form.control');
const chat = document.querySelector('.chat');

const playerFirst = {
    name: 'Scorpion',
    player: 1,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['hand', 'leg','head'],
    attack: function () {
        console.log(`${this.name} fight`);
    },
    elHp,
    renderHp,
    changeHP
}


const playerSecond = {
    name: 'Kitana',
    player: 2,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['hand', 'leg','head'],
    attack: function () {
        console.log(`${this.name} fight`);
    },
    elHp,
    renderHp,
    changeHP
}

const HIT = {
    head: 30,
    body: 25,
    foot: 20
}
const ATTACK = ['head', 'body', 'foot'];


const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};



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

function getRandom(num) {
    return Math.ceil(Math.random() * num);
}


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
    arena.append(wrapReloadBtn);

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

// randomBtn.addEventListener('click', function () {
//     // changeHP(playerFirst);
//     // changeHP(playerSecond);
//
//
//     changeHP.call(playerFirst, getRandom(20));
//     changeHP.call(playerSecond, getRandom(20));
//
//     playerFirst.renderHp();
//     playerSecond.renderHp();
//
//     if(playerFirst.hp === 0 || playerSecond === 0) {
//         randomBtn.disabled = true;
//     }
//
//     if(playerFirst.hp === 0 && playerFirst.hp < playerSecond.hp) {
//         arena.append(playerWins(playerSecond.name));
//         randomBtn.style = 'display: none;'
//         createReloadButton();
//     } else if(playerSecond.hp === 0 && playerSecond.hp < playerFirst.hp) {
//         arena.append(playerWins(playerFirst.name));
//         randomBtn.style = 'display: none;'
//         createReloadButton();
//     } else if (playerFirst.hp === 0 && playerSecond.hp === 0) {
//         arena.append(playerWins());
//         randomBtn.style = 'display: none;'
//         createReloadButton();
//     }
//
// });

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

function showresult() {
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

function timeShow() {
    let date = new Date();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let hours = date.getHours();

    function fixTime(num) {
        if( num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }



    return `<span class="time">[${fixTime(minutes)} : ${fixTime(seconds)} : ${fixTime(hours)}]</span>`;
}

function generateLogs(type, player1, player2) {
    //const text = logs[type][getRandom()].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
    let text;
    console.log(text);

    switch (type) {
        case 'start':
            text = logs['start'].replace('[time]', timeShow()).replace('[player1]', player1.name).replace('[player2]', player2.name);
            break;

        case 'end':
            text = logs['end'][getRandom(logs.end.length - 1)].replace('[playerWins]', player1.name).replace('[playerLose]', player2.name);
            break;

        case 'hit':
            text = logs['hit'][getRandom(logs.hit.length - 1)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
            break;

        case 'defence':
            text = logs['defence'][getRandom(logs.defence.length - 1)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
            break;

        case 'draw':
            text = logs['draw'];
            break;

    }

    const el = type === 'start' ?  `<p>${text}</p>` : `<p>${timeShow()} ${text} [-${player1.hp}] [hp/100]</p>`;
    chat.insertAdjacentHTML('afterbegin', el);


}

generateLogs('start', playerSecond, playerFirst);

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



