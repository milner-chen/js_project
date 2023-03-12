console.log("webpack is doing well, from game")
import Player from "./player";
import Platform from "./platform";

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
        this.player = new Player([0, 550]);
        // should have platforms -> arr
        this.platforms = [
            // hardcoding some platforms
            // new Platform([50, 525], 100, 20),
            // new Platform([400, 475], 200, 20),
            // new Platform([150, 325], 75, 20),
            // new Platform([300, 525], 150, 20),
            // new Platform([225, 350], 100, 20),
            // new Platform([50, 525], 100, 20),
            // new Platform([100, 475], 200, 20),
            // new Platform([150, 325], 75, 20),
            // new Platform([200, 525], 150, 20),
            // new Platform([225, 500], 100, 20)
        ];
        // should have items -> arr
        this.createPlatforms();
        console.log(this.platforms);
    }

    createPlatforms() {
        // create just one for collision detection
        // if I decide to create them randomly?
            // new Platform([225, 500], 100, 20)
        for (let i = 0; i < 35; i++) {
            let x = Math.floor(Math.random() * 851) + 50;
            let y = Math.floor(Math.random() * 551);
            let width = Math.floor(Math.random() * 250) + 50;
            this.platforms.push(
                new Platform([x, y], width, 20)
            );
        }
    }

    draw(ctx) {
        // debugger;
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.drawImage(Game.BG, 0, 0, Game.DIM_X, Game.DIM_Y);
        
        // this.player.move([1, 1]);
        // console.log(this.player.pos);
        // console.log(this);

        // drawing that one singular platform for now
        // debugger;
        this.platforms.forEach(plat => plat.draw(ctx));

        // note that this (0, 0) is actually the dimensions of the sprite
        this.player.draw(ctx, 0, 0);
    }

    moveObjects() {
        // debugger;
        this.player.move();
        // console.log(this.player.pos);
        // this.collideObjects(this.player);
    }

    collideObjects(object) {
        if (object.pos[0] < 0) { object.pos[0] = 0; object.xVelocity = 0; }
        else if (object.pos[0] + object.size > Game.DIM_X) { object.pos[0] = Game.DIM_X - object.size; object.xVelocity = 0;}
        if (object.pos[1] < 0) { object.pos[1] = 0; object.xVelocity = 0; }
        else if (object.pos[1] + object.size + object.yVelocity > Game.DIM_Y) { object.yVelocity = 0; }
    }
}

export default Game;