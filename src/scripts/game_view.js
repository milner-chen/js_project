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
        // this.sprite = new Sprite();
        this.frame = 0;
        this.frameCount = 0;
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
        this.count = timeStamp / 1000;
        const player = this.game.player;
        const objects = this.game.platforms;
        // const 

        
        
        
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
                && player.pos[0] + player.width >= obj.pos[0]
                && player.pos[0] + (player.width / 2) <= obj.pos[0] + obj.width) {
                player.yVelocity = 0;
                player.xVelocity = 0;
            }
        })



        // objects.forEach(obj => {
        //     // console.log("player:");
        //     // console.log(player.pos);
        //     // console.log(player.width, player.height);
        //     // console.log(obj);
        //     // console.log(obj.pos);
        //     // console.log(obj.width, obj.height);
        //     if (player.pos[1] + player.height <= obj.pos[1] + obj.height
        //         && player.pos[1] + player.height >= obj.pos[1] //- obj.height
        //         && player.pos[0] + player.width >= obj.pos[0] + obj.width
        //         && player.pos[0] <= obj.pos[0]) {
        //         player.yVelocity = 0;
        //         player.xVelocity = 0;
        //         debugger
        //         console.log("should stand on platform");
        //         // return player.grounded = true;
        //     } //else { player.grounded = false; }
        // })

        // objects.forEach(obj => {
        //     if (!(player.pos[0] > obj.pos[0] + (obj.width) || // x start of 1 after end of 2
        //     player.pos[0] + (player.width) < obj.pos[0] || // x end of 1 before start of 2
        //     player.pos[1] > obj.pos[1] + (obj.height) || // y top of 1 below bottom of 2
        //     player.pos[1] + (player.height) < obj.pos[1] // y bottom of 1 above top of 2
        // )) {
        //         player.yVelocity = 0;
        //     }
        // });


        // game over: reload page;
        // if (this.game.lives.length === 0) document.location.reload();
        // clearInterval(setInterval(draw, 10));

        // testing sprites
        // this.sprite.testSprite(this.ctx, 47, this.frame, 400, 55);
        // this.sprite.testSprite(this.ctx, 46, this.frame, 255, 145);






        console.log(player.pos);
        console.log(player.width);
        requestAnimationFrame(this.animate.bind(this));

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