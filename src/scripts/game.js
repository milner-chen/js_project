console.log("webpack is doing well, from game")
import Player from "./player";
import Platform from "./platform";
import Item from "./item";
import Border from "./border";
import TaskList from "./task_list";
import Life from "./life";
import Sprite from "../sprite";

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
        // debugger;
        this.player = new Player([0, 400]);
        // console.log("player created at:", this.player.pos);
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
            new Platform([529, 113], 75, 20),
            new Platform([652, 290], 150, 20),
            new Platform([727, 80], 100, 20),
            new Platform([727, 455], 150, 20),
            new Platform([779, 185], 150, 20),
            new Platform([854, 355], 100, 20)
        ];
        // should have items -> arr
        // this.createPlatforms();
        // console.log(this.platforms);

        this.found = [];
        // this.list = ["jam", "bread"];
        
        this.items = [
            // new Item("strawberrycake", [500, 570]), // testing purposes
            new Item("bread", [170, 405 - 25]),
            new Item("jam", [350, 250]),
            new Item("dumplings", [400, 400]),
            // new Item("egg", [900, 300]),
            // new Item("jelly", [600, 340]),
            // new Item("pancakes", [500, 150]),
            // new Item("strawberrycake", [760, 60]),
        ];
        
        this.tasklist = new TaskList(this.items);

        // this.allObjects = this.platforms.concat(this.items);
        // console.log(this.allObjects);

        this.score = 0;

        this.lives = [
            new Life(),
            new Life(),
            new Life()
        ];


        // this.sprite = new Sprite();

        this.frame = 0;
        this.frameCount = 0;

        this.lose = false;
        this.win = false;
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
        ctx.font = "60px Cute Font";
        ctx.textAlign = "center";
        // ctx.fillStyle = "beige";
        // ctx.fillText("Score: " + this.score, 499.5, 50.5);
        ctx.fillStyle = "#FF7F50";
        ctx.fillText("Score: " + this.score, 500, 50);
        ctx.fillText("Score: " + this.score, 500, 51);
    }

    draw(ctx) {
        // debugger;
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.drawImage(Game.BG, 0, 0, Game.DIM_X, Game.DIM_Y);
        this.drawText(ctx);
        // console.log(this.player.pos);
        this.tasklist.draw(ctx);
        
        for (let i = 0; i < this.lives.length; i++) {//
            let life = this.lives[i];
            life.draw(ctx, Game.DIM_X - 70 - (i * 40), 30);
        }
        // this.items.forEach(item => item.draw(ctx));

        // note that this (0, 0) is actually the dimensions of the sprite
        this.platforms.forEach(obj => {
            obj.draw(ctx);
            // let border = new Border(obj);
            // border.draw(ctx);
        })
        for (let i = 0; i < this.items.length; i++) {
            let obj = this.items[i];
            obj.draw(ctx);
            // let border = new Border(obj);
            // border.draw(ctx);
            if (this.hasCollison(this.player, obj)) {
                // debugger;
                // let collision = false;

                if (this.tasklist.isNextItem(obj)) {
                    // collsion = true;
                    // this.found.push(this.items.splice(i, 1));
                    this.found.push(this.items.shift());
                    this.score += 100;
                    // console.log(this.tasklist.found); // could draw a line throught the ones already found
                } else {
                    if (!obj.collision) { // if it isn't already colliding
                        this.lives.pop();
                        // this.player.pos[0] - 5;
                        obj.collision = true;
                        setTimeout(() => {
                            // console.log("testing timeout");
                            obj.collision = false;
                        }, 2000);
                            // console.log(obj.collision);
                    }
                        // if (obj.count === 0) { obj.count = 19; }
                    // debugger;
                    // handle what to do if collision

                    // just shove the player away...
                    // this.player.pos[0] += obj.width;
                    // this.player.xVelocity *= 0.5;
                    // this.player.pos[1] += obj.height;
                    // this.player.yVelocity *= 0.5;

                    // this.player.pos[0] > (obj.pos[0] / 2) ? this.player.pos[0] += obj.width : this.player.pos[0] -= obj.width;
                    // this.player.pos[1] > (obj.pos[1] / 2) ? this.player.pos[1] += obj.height : this.player.pos[1] -= obj.height;

                    // this.lives.pop();
                    // console.log(this.items);
                }
            }
            obj.count -= 1;
            if (obj.count === 0) obj.count = 19;

            
            if (this.lives.length === 0) {
                setTimeout(() => {
                    this.lose = true;
                }, 10);         
            }
            // console.log(this.items);
            if (this.items.length === 0) {
                // console.log("the list is empty");
                setTimeout(() => {
                    this.win = true;
                }, 25); 
            }
        }
        

        
        // starting animation logic
        // if (this.player.left && this.player.yVelocity === 0) {
        //     this.player.drawSprite(ctx, this.player.img[0], 2, 1)
        // }




        // this.player.draw(ctx, 5, 5);
        
        // let cat = new Border(this.player);
        // cat.draw(ctx);
        // window.cat = cat;
        // console.log(cat);
        // ctx.font = "30px serif";
        // ctx.fillText("current score", 400, 50);

        this.player.drawSprite(ctx, this.player.img[0], this.frame);
        // console.log("action row: ", this.player.row);
        // console.log("frame col: ", this.frame);
        if (this.frameCount >= this.player.frameSpeed) {
            this.frame++;
            if (this.frame > this.player.maxFrames) this.frame = 0;
            this.frameCount = 0;
        }
        this.frameCount++;

    }

    moveObjects() {
        // debugger;
        this.player.move();
        // console.log(this.player.pos);
        // this.collideObjects(this.player);
    }

    // for items
    // not enough clarity about the type of collision for later
    hasCollison(rect1, rect2) {
        if (!(rect1.pos[0] + (rect1.width * .3) > rect2.pos[0] + (rect2.width) || // x start of 1 after end of 2
            rect1.pos[0] + (rect1.width * .65) < rect2.pos[0] || // x end of 1 before start of 2
            rect1.pos[1] + (rect1.height * .7) > rect2.pos[1] + (rect2.height) || // y top of 1 below bottom of 2
            rect1.pos[1] + (rect1.height) < rect2.pos[1] // y bottom of 1 above top of 2
        )) { // collision found
            return true;
        } else { // collision not found
            return false;
        }
    }

    // collisionType(pos1, pos2) {
    //     if (pos1[0] > pos2[0] ) return ""
    // }
}

export default Game;