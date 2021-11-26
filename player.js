import {attack, elHp, renderHp, changeHP} from "./changeHP.js";

class Player {
    constructor(props) {
        this.name = props.name;
        this.player = props.player;
        this.hp = props.hp;
        this.img = props.img;
        this.weapon = props.weapon;
        this.attack = props.attack;
        this.elHp = props.elHp;
        this.renderHp = props.renderHp;
        this.changeHP = props.changeHP;
    }
}

export const playerFirst = new Player({
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
})

export const playerSecond = new Player({
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
})