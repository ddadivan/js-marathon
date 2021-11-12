
const arena = document.querySelector('.arena1');

const playerFirst = {
    name: 'Scorpion',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['hand', 'leg','head'],
    attack: function () {
        console.log(`${this.name} fight`);
    }
}


const playerSecond = {
    name: 'Kitana',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['hand', 'leg','head'],
    attack: function () {
        console.log(`${this.name} fight`);
    }
}



function createPlayer(playerClass = 'player', obj) {
    let elem = document.createElement('div');
    elem.classList.add(playerClass);
    elem.innerHTML = `
        <div class="progressbar">
            <div class="life" style="width: 100%;"></div>
            <div class="name">${obj.name}</div>
        </div>
        <div class="character">
            <img src="${obj.img}" alt="${obj.name}">
        </div>
    `;

    return arena.appendChild(elem);
}

createPlayer('player1', playerFirst);
createPlayer('player2', playerSecond);
