import Game from "./game";

console.log("hi, from game view");

// this is where we will actually run the game
// this is basically the game loop?
class GameView {
    
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        // this.startTime = 60;
        // this.step = 0;
        this.timer = 61;
        this.count = 0;
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

    // updateTimer() {
    //     this.step += 1;
    //     if (this.step === 144) {
    //         this.startTime -= 1;
    //         this.step = 0;
    //     }
    // }

    animate(timeStamp) {
        this.count = timeStamp / 1000;
        const player = this.game.player;
        const objects = this.game.platforms;
        // const 
        this.game.moveObjects();
        this.game.draw(this.ctx);

        
        this.ctx.font = "40px Cute Font";
        this.ctx.fillStyle = "#FF7F50";
        this.ctx.textAlign = "center";
        this.ctx.fillText(this.printTimer(this.timer - this.count), 500, 80);
        this.ctx.fillText(this.printTimer(this.timer - this.count), 500, 80.8);


        // this.ctx.fillText(this.printTimer(this.startTime), 500, 200);
        // this.updateTimer();
        // this.ctx.fillText(`${Math.floor(this.startTime/60)}:${this.startTime % 60}`, 500, 300);
        // this.startTime -= 1/60;
        // this.ctx.fillText(Math.floor(this.originTime - performance.now() /1000), 500, 250);

        
        requestAnimationFrame(this.animate.bind(this));

        // check if player is above the platform (collision detection)
        // should probably make this it's own function tbh
        objects.forEach(obj => {
            if (player.pos[1] + player.ydim <= obj.pos[1] - (obj.height / 2)
                && player.pos[1] + player.ydim + player.yVelocity >= obj.pos[1] - (obj.height / 2)
                && player.pos[0] + player.xdim >= obj.pos[0]
                && player.pos[0] + (player.xdim / 2) <= obj.pos[0] + obj.width) {
                player.yVelocity = 0;
                player.xVelocity = 0;
            }
        })

        // game over: reload page;
        // if (this.game.lives.length === 0) document.location.reload();
        // clearInterval(setInterval(draw, 10));
    }

    start() {
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
        requestAnimationFrame(this.animate.bind(this));
    }
}

export default GameView;