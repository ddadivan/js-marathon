
export function attack() {
    console.log(this.name + ' ' + 'Fight');
}

export function elHp() {
    return document.querySelector('.player'+this.player+' .life');
}

export function changeHP(randomNumber) {
    this.hp -= randomNumber;

    if(this.hp <= 0) {
        this.hp = 0;
    }
}

export function renderHp() {
    this.elHp().style.width = this.hp + '%';
}
