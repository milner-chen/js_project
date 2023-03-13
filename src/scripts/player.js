import Game from "./game";

console.log("player class is working");
class Player {
    // class variables
    // static keys = {};
    static IMG = new Image();
    static CWIDTH = 1000;
    static CHEIGHT = 600;
    constructor(pos) {
        Player.IMG.src = "src/assets/cat.png";
        // this.IMG = IMG;
        this.pos = pos;
        this.xdim = 23; // dimensions of the actual image
        this.ydim = 23;
        this.width = this.xdim * 1.5; //scaled size
        this.height = this.ydim * 1.5;
        //  new additions
        this.xVelocity = 0;
        this.yVelocity = 0;
        this.jumping = false;
        this.friction = 0.8;
        this.gravity = 0.5;
        this.up = false;
        this.left = false;
        this.right = false;
    }

    draw(ctx, sx, sy) {
        // (image, sx, sy, sWidth, sHeight, cx, cy, cWidth, cHeight)
        ctx.drawImage(Player.IMG, sx, sy, this.xdim, this.ydim, ...this.pos, this.width, this.height);
    }

    bindKeys() {
        // if you use switch, case later, remember to add break after every condition
        window.addEventListener("keydown", event => {
            if (event.key === "ArrowUp" && !this.jumping) {
                if (this.yVelocity == 0) {
                    this.yVelocity -= 10;
                }
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

    onGround() {
        return this.pos[0] >= this.CHEIGHT - this.height;
    }
    move() {

        if (this.right) {
            this.xVelocity = 3;
        } else if (this.left) {
            this.xVelocity = -3;
        } else this.xVelocity = 0;

        this.xVelocity *= this.friction;
        // console.log(this.pos[0]);
        // console.log(this.xVelocity);
        // console.log(Player.CWIDTH);

        // left and right bounds
        if (this.pos[0] + this.xVelocity < 0
        || this.pos[0] + this.width + this.xVelocity > Player.CWIDTH) {
            this.xVelocity = 0;
        } else {
            this.pos[0] += this.xVelocity;
        }

        this.pos[1] += this.yVelocity;
        // if not at bottom of canvas, add gravity
        if (this.pos[1] + this.width + this.yVelocity <= Player.CHEIGHT) {
            this.yVelocity += this.gravity;
        } else this.yVelocity = 0; // else, stop gravity

    }

}

export default Player;