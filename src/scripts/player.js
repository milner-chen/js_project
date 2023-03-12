import Game from "./game";

console.log("player class is working");
class Player {
    // class variables
    // static keys = {};
    static IMG = new Image();
    static CWIDTH = 800;
    static CHEIGHT = 600;
    constructor(pos) {
        Player.IMG.src = "src/assets/cat.png";
        // this.IMG = IMG;
        this.pos = pos;
        this.dims = 32; // dimensions of the actual image
        this.size = this.dims * 1.5; //scaled size
        //  new additions
        this.xVelocity = 0;
        this.yVelocity = 0;
        this.jumping = false;
        this.friction = 0.4;
        this.gravity = 0.5;
        this.up = false;
        this.left = false;
        this.right = false;
    }

    draw(ctx, sx, sy) {
        // (image, sx, sy, sWidth, sHeight, cx, cy, cWidth, cHeight)
        ctx.drawImage(Player.IMG, sx, sy, this.dims, this.dims, ...this.pos, this.size, this.size);
    }

    bindKeys() {
        // if you use switch, case later, remember to add break after every condition
        window.addEventListener("keydown", event => {
            if (event.key === "ArrowUp" && !this.jumping) {
                this.yVelocity -= 10;
                this.jumping = true;
                // maybe check if yVelocity is > 0, then don't add more or something
            }
            if (event.key === "ArrowLeft") {
                this.left = true;
            }
            if (event.key === "ArrowRight") {
                this.right = true;
            }
            console.log("up", this.up);
            console.log("left", this.left);
            console.log("right", this.right);
        })
        window.addEventListener("keyup", event => {
            // keys[event.key] = false;
            if (event.key === "ArrowUp") {
                this.up = false;
                this.jumping = false;
            }
            if (event.key === "ArrowLeft") {
                this.left = false;
                // this.xVelocity = 0;
            }
            if (event.key === "ArrowRight") {
                this.right = false;
                // this.xVelocity = 0;
            }
            console.log("up", this.up);
            console.log("left", this.left);
            console.log("right", this.right);
        })
    }

    move() {

        if (this.right) {
            this.xVelocity = 3;
        } else if (this.left) {
            this.xVelocity = -3;
        } else this.xVelocity = 0;

        this.pos[0] += this.xVelocity;
        // this.pos[0] *= this.friction;

        this.pos[1] += this.yVelocity;
        // if not at bottom of canvas, add gravity
        if (this.pos[1] + this.size + this.yVelocity <= Player.CHEIGHT) {
            this.yVelocity += this.gravity;
        } else this.yVelocity = 0; // else, stop gravity

        // left + right out of bounds conditions later
        // if (this.pos[0] + this.size + this.xVelocity <= Player.CWIDTH) {
        //     if (this.right) {
        //         this.xVelocity = 3;
        //     } else if (this.left) {
        //         this.xVelocity = -3;
        //     } else this.xVelocity = 0;
        // } else this.xVelocity = 0;

    }

}

export default Player;