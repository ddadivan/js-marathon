import {generateLogs} from "./logs.js";
import {playerFirst, playerSecond} from "./player.js";

class Game {
    constructor() {
        this.start = () => generateLogs('start', playerSecond, playerFirst);
    }
}

export default Game;