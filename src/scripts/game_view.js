import Game from "./game";

console.log("hi, from game view");

// this is where we will actually run the game
// this is basically the game loop?
class GameView {
    static dist = 3;
    static MOVES = {
        ArrowLeft: [-GameView.dist, 0],
        ArrowRight: [GameView.dist, 0],
        ArrowUp: [0, -GameView.dist],
        ArrowDown: [0, GameView.dist]
    };
    
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
    }
    
    // bindKeys() {
    //     const player = this.game.player;
    //     let pressedKeys = {};
    //     window.addEventListener("keydown", event => {
    //         pressedKeys[event.key] = true;
    //         // if (pressedKeys["ArrowUp"]) this.game.player.move(GameView.MOVES["ArrowUp"]);
    //         // if (pressedKeys["ArrowDown"]) this.game.player.move(GameView.MOVES["ArrowDown"]);
    //         // if (pressedKeys["ArrowLeft"]) this.game.player.move(GameView.MOVES["ArrowLeft"]);
    //         // if (pressedKeys["ArrowRight"]) this.game.player.move(GameView.MOVES["ArrowRight"]);
    //         console.log(event.key);
    //         console.log(player.pos);
    //         console.log(player.xVelocity);
    //         console.log(player.yVelocity);
    //         // debugger;
    //         // handle logic elsewhere
    //         // if (pressedKeys["ArrowUp"]) player.moveJump();
    //         // if (pressedKeys["ArrowLeft"]) player.moveLeft();
    //         // if (pressedKeys["ArrowRight"]) player.moveRight();
    //         // event.preventDefault();


    //     });
    //     window.addEventListener("keyup", event => {
    //         pressedKeys[event.key] = false;
    //         console.log(event.key);
            
    //         if (event.key === "ArrowUp") { player.jumping = false; player.yVelocity += 10; }
    //         if (event.key === "ArrowLeft") player.xVelocity = 0;
    //         if (event.key === "ArrowRight") player.xVelocity = 0;
    //     })

    //         // if (MOVES[event.key]) this.game.player.move(MOVES[event.key]);
    //         // console.log("player pos:", this.game.player.pos);
    //     // });
    //     // console.log(this.game.player.pos);

    // }

    animate() {
        const player = this.game.player;
        const plats = this.game.platforms;
        // const 
        this.game.moveObjects();
        this.game.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));

        // check if player is above the platform (collision detection)
        // should probably make this it's own function tbh
        plats.forEach(plat => {
            if (player.pos[1] + player.dims <= plat.pos[1]
                && player.pos[1] + player.dims + player.yVelocity >= plat.pos[1]
                && player.pos[0] + (player.dims / 2) >= plat.pos[0]
                && player.pos[0] + (player.dims / 2) <= plat.pos[0] + plat.width) {
                player.yVelocity = 0;
            }
        })
    }

    start() {
        this.game.player.bindKeys();
        // debugger;
        // this.bindKeys();
        // this.prevTime = 0;
        // setInterval(() => {
        //     this.game.draw(this.ctx);
            // this.game.moveObjects();
        // }, 1);
        //get animation frame
        requestAnimationFrame(this.animate.bind(this));
    }
}

export default GameView;