console.log("webpack is doing well, from game")
import Player from "./player";

// this is where we will load other elements of the game
// this will also hold the game logic
class Game {
    static DIM_X = 800;
    static DIM_Y = 600;
    static BG = new Image();
    constructor() {
        // create bg here
        Game.BG.src = "src/assets/bg_1.png";
        // should have a player
        this.player = new Player([0, 400]);
        // should have platforms -> arr
        // should have items -> arr
    }

    draw(ctx) {
        // debugger;
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.drawImage(Game.BG, 0, 0, Game.DIM_X, Game.DIM_Y);
        // this.player.move([1, 1]);
        // console.log(this.player.pos);
        // console.log(this);
        // note that this (0, 0) is actually the dimensions of the sprite
        this.player.draw(ctx, 0, 0);
    }

    moveObjects() {
        // this.player.move([10, 0]);
    }
}

export default Game;