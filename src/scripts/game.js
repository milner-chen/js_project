console.log("webpack is doing well, from game")
import Player from "./player";
import Platform from "./platform";
import Item from "./item";
import Border from "./border";

// this is where we will load other elements of the game
// this will also hold the game logic
class Game {
    static DIM_X = 1000;
    static DIM_Y = 600;
    static BG = new Image();
    constructor() {
        // create bg here
        Game.BG.src = "src/assets/bg_1.png";
        // should have a player
        this.player = new Player([0, 500]);
        window.player = this.player;
        // should have platforms -> arr
        this.platforms = [
            // hardcoding some platforms
            new Platform([0, 500], 150, 20),
            new Platform([14, 263], 150, 20),
            new Platform([150, 405], 100, 20),
            new Platform([258, 306], 150, 20),
            new Platform([362, 495], 100, 20),
            new Platform([408, 216], 150, 20),
            new Platform([479, 395], 150, 20),
            new Platform([529, 103], 75, 20),
            new Platform([652, 290], 150, 20),
            new Platform([727, 77], 100, 20),
            new Platform([727, 455], 150, 20),
            new Platform([779, 165], 150, 20),
            new Platform([854, 355], 100, 20)
        ];
        // should have items -> arr
        // this.createPlatforms();
        // console.log(this.platforms);

        this.found = [];
        this.list = ["jam", "bread"];

        this.items = [
            new Item("bread", [170, 405 - 25]),
            new Item("jam", [854, 355 - 25]),
        ];
        
        this.allObjects = this.platforms.concat(this.items);
        console.log(this.allObjects);

        this.score = 0;
    }

    // createPlatforms() {
    //     // create just one for collision detection
    //     // if I decide to create them randomly?
    //         // new Platform([225, 500], 100, 20)
    //     for (let i = 0; i < 35; i++) {
    //         let x = Math.floor(Math.random() * 851) + 50;
    //         let y = Math.floor(Math.random() * 551);
    //         let width = Math.floor(Math.random() * 250) + 50;
    //         this.platforms.push(
    //             new Platform([x, y], width, 20)
    //         );
    //     }
    // }    

    drawText(ctx) {
        ctx.font = "40px Cute Font";
        ctx.textAlign = "center";
        ctx.fillStyle = "beige";
        ctx.fillText("Score: " + this.score, 499.5, 50.5);
        ctx.fillStyle = "coral";
        ctx.fillText("Score: " + this.score, 500, 50);
    }

    draw(ctx) {
        // debugger;
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.drawImage(Game.BG, 0, 0, Game.DIM_X, Game.DIM_Y);
        this.drawText(ctx);
        // this.player.move([1, 1]);
        // console.log(this.player.pos);
        // console.log(this);

        // this.platforms.forEach(plat => plat.draw(ctx));
        // this.items.forEach(item => item.draw(ctx));

        // note that this (0, 0) is actually the dimensions of the sprite
        this.platforms.forEach(obj => {
            obj.draw(ctx);
            let border = new Border(obj);
            border.draw(ctx);
        })
        for (let i = 0; i < this.items.length; i++) {
            let obj = this.items[i];
            obj.draw(ctx);
            let border = new Border(obj);
            border.draw(ctx);
            if (this.hasCollison(this.player, obj)) {
                // debugger;
                if (obj instanceof Item) {
                    this.found.push(this.items.splice(i, 1));
                    console.log(this.items);
                    console.log(this.found); // could draw a line throught the ones already found
                }
            }
        }
        
        this.player.draw(ctx, 5, 5);
        
        let cat = new Border(this.player);
        cat.draw(ctx);
        window.cat = cat;
        // console.log(cat);
        // ctx.font = "30px serif";
        // ctx.fillText("current score", 400, 50);
        
    }

    moveObjects() {
        // debugger;
        this.player.move();
        // console.log(this.player.pos);
        // this.collideObjects(this.player);
    }

    // currently not in use
    // collideObjects(object) {
    //     if (object.pos[0] < 0) { object.pos[0] = 0; object.xVelocity = 0; }
    //     else if (object.pos[0] + object.width > Game.DIM_X) { object.pos[0] = Game.DIM_X - object.width; object.xVelocity = 0;}
    //     if (object.pos[1] < 0) { object.pos[1] = 0; object.xVelocity = 0; }
    //     else if (object.pos[1] + object.height + object.yVelocity > Game.DIM_Y) { object.yVelocity = 0; }
    // }

    hasCollison(rect1, rect2) {
        if (!(rect1.pos[0] > rect2.pos[0] + rect2.width || // x start of 1 after end of 2
            rect1.pos[0] + rect1.width < rect2.pos[0] || // x end of 1 before start of 2
            rect1.pos[1] > rect2.pos[1] + rect2.height || // y top of 1 below bottom of 2
            rect1.pos[1] + rect1.height < rect2.pos[1] // y bottom of 1 above top of 2
        )) { // collision found
            return true;
        } else { // collision not found
            return false;
        }
    }
}

export default Game;