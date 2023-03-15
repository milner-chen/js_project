import Game from "./game";

console.log("hi, from game view");

// this is where we will actually run the game
// this is basically the game loop?
class GameView {
    
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.timer = 91;
        // this.startTime = 60;
        // this.step = 0;
        this.timer = 25;
        this.count = 0;
        // this.sprite = new Sprite();
        this.frame = 0;
        this.frameCount = 0;
        // this.running = false;
        this.animationFunc;
        this.timestampStart = null;
        this.lastTimestamp = null;
    }

    printTimer(start) {
        let minutes = Math.floor(start / 60);
        let seconds = Math.floor(start % 60);
        let str = ``;
        if (seconds === 0) {
            str = "0";
        } else if (seconds < 10) str = "0";
        if (start <= 0) return "done";
        return `${minutes}:${str}${seconds}`;
    }


    animate(timeStamp) {
        if (!this.timestampStart) {
            this.timestampStart = timeStamp;
        }
        let timeSinceStart = timeStamp - this.timestampStart;

        this.count = timeSinceStart / 1000;
        // if (this.running) this.count = timeStamp / 1000;
        // this.count += 1/1000;
        const player = this.game.player;
        const objects = this.game.platforms;
        // const
        // console.log(timeStamp);
        
        this.game.moveObjects();
        this.game.draw(this.ctx);
        
        // if (this.game.player.right) this.game.player.row = 5;
        // if (this.frameCount >= 15) {
        //     this.frame++;
        //     if (this.frame > 7) this.frame = 0;
        //     this.frameCount = 0;
        // }
        // this.frameCount++;

        
        this.ctx.font = "40px Cute Font";
        this.ctx.fillStyle = "#FF7F50";
        this.ctx.textAlign = "center";
        this.ctx.fillText(this.printTimer(this.timer - this.count), 500, 80);
        this.ctx.fillText(this.printTimer(this.timer - this.count), 500, 80.8);

        

        // check if player is above the platform (collision detection)
        // should probably make this it's own function tbh
        objects.forEach(obj => {
            if (player.pos[1] + player.height <= obj.pos[1]
                && player.pos[1] + player.height + player.yVelocity >= obj.pos[1]
                && player.pos[0] + (player.width * .725) >= obj.pos[0]
                && player.pos[0] + (player.width / 2) <= obj.pos[0] + obj.width) {
                player.yVelocity = 0;
                player.xVelocity = 0;
            }
        })

        // WORKING END GAME LOGIC RIGHT HERE
        console.log(Math.floor(this.timer - this.count));
        if (Math.floor(this.timer - this.count) !== 0 && !this.game.lose && !this.game.win) {
            requestAnimationFrame(this.animate.bind(this));
            // console.log(this.game.win);
        } else {
            if (this.game.win) {
                this.gameEnd(this.ctx, "You made Lector proud c:");
            } else this.gameEnd(this.ctx, "You have failed Lector :/");
        }
    }

    gameEnd(ctx, mes) {
        ctx.strokeStyle = "coral";
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y); // x = 200 - 800, y = 100 - 500
        ctx.lineWidth = 8;
        ctx.fillStyle = "beige";
        ctx.beginPath();
        ctx.roundRect(200, 100, 600, 400, 15);
        ctx.stroke();
        ctx.fill();
        ctx.font = "60px Cute Font";
        ctx.textAlign = "center";
        // ctx.fillStyle = "#FF7F50";
        ctx.font
        ctx.fillStyle = "none";
        ctx.beginPath();
        ctx.roundRect(300, 250, 400, 175, 15);
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = "cadetblue";
        ctx.fillText(mes, 500, 200);
        ctx.font = "50px Cute Font";
        ctx.fillText("Score: " + this.game.score, 500, 300);
        ctx.fillText("Time: " + this.printTimer(this.timer - this.count), 500, 350);
        ctx.fillText("Lives Left: " + this.game.lives.length, 500, 400);
    }

    start() {
        // console.log(this.running);
        this.game.player.bindKeys();
        // this.originTime = performance.timeOrigin;
        // debugger;
        // this.bindKeys();
        // this.prevTime = 0;
        // setInterval(() => {
        //     this.game.draw(this.ctx);
            // this.game.moveObjects();
        // }, 1);
        //get animation frame
        // if (this.running) 
        requestAnimationFrame(this.animate.bind(this));
        // this.animationFunc = requestAnimationFrame(this.animate.bind(this));

    }
}

export default GameView;