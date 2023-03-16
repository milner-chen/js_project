import Game from "./game";

// this is where we will actually run the game
// this is basically the game loop?
class GameView {
    
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.timer = 91;
        // this.timer = 25;
        this.count = 0;
        this.frame = 0;
        this.frameCount = 0;
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
        const player = this.game.player;
        const objects = this.game.platforms;
        
        this.game.moveObjects();
        this.game.draw(this.ctx);
        
        this.ctx.font = "40px Cute Font";
        this.ctx.fillStyle = "#FF7F50";
        this.ctx.textAlign = "center";
        this.ctx.fillText(this.printTimer(this.timer - this.count), 500, 80);
        this.ctx.fillText(this.printTimer(this.timer - this.count), 500, 80.8);

        

        // check if player is above the platform (collision detection)
        objects.forEach(obj => {
            if (player.pos[1] + player.height <= obj.pos[1]
                && player.pos[1] + player.height + player.yVelocity >= obj.pos[1]
                && player.pos[0] + (player.width * .75) >= obj.pos[0]
                && player.pos[0] + (player.width *.5) <= obj.pos[0] + obj.width) {
                player.yVelocity = 0;
                player.xVelocity = 0;
            }
        })

        // end game logic
        if (Math.floor(this.timer - this.count) !== 0 && !this.game.lose && !this.game.win) {
            requestAnimationFrame(this.animate.bind(this));
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
        ctx.fillText("Time Left: " + this.printTimer(this.timer - this.count), 500, 350);
        ctx.fillText("Lives Left: " + this.game.lives.length, 500, 400);

        const restart = document.getElementById("restart");
        restart.style.display = "block";
        
    }

    start() {
        this.game.player.bindKeys();
        requestAnimationFrame(this.animate.bind(this));
    }
}

export default GameView;