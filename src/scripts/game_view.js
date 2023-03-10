import Game from "./game";

console.log("hi, from game view");

// window.addEventListener("keydown", event => {
//     const key = event.key;
//     // console.log(MOVES[key]);
// });

// this is where we will actually run the game
// this is basically the game loop?
class GameView {
    static MOVES = {
        ArrowLeft: [-5, 0],
        ArrowRight: [5, 0],
        ArrowUp: [0, -5],
        ArrowDown: [0, 5]
    };
    
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
    }
    
    bindKeys() {
        let pressedKeys = {};
        window.addEventListener("keydown", event => {
            pressedKeys[event.key] = true;
            // console.log(pressedKeys);
            Object.keys(pressedKeys).forEach(key => {
                console.log("key:", key);
                console.log("dir", GameView.MOVES[key]);
                this.game.player.move(GameView.MOVES[key]);
                // console.log("player pos:", this.game.player.pos);
            });
            pressedKeys = {};

            // if (MOVES[event.key]) this.game.player.move(MOVES[event.key]);
            // console.log("player pos:", this.game.player.pos);
        });
        // console.log(this.game.player.pos);

    }

    start() {
        // debugger;
        this.bindKeys();
        setInterval(() => {
            this.game.draw(this.ctx);
            // this.game.moveObjects();
        }, 10);
        //getanimationframe()
    }
}

export default GameView;