import Game from "./game";

class Player {
    static IMG = new Image();
    static CWIDTH = 1000;
    static CHEIGHT = 600;
    constructor(pos) {
        Player.IMG.src = "src/assets/cat.png";
        this.pos = pos;
        this.xVelocity = 0;
        this.yVelocity = 0;
        this.jumping = false;
        this.friction = 0.75;
        this.gravity = 0.45;
        this.up = false;
        this.left = false;
        this.right = false;

        this.xdim = 32;
        this.ydim = 32;
        this.scale = 3;
        this.width = this.xdim * this.scale;
        this.height = this.ydim * this.scale;
        this.row = 0;
        this.img = [new Image(), new Image()];
        this.img[0].src = "src/assets/cat_sheet.png";
        this.maxFrames = 1;
        this.frameSpeed = 15;
        this.direction = "right";

    }

    draw(ctx, sx, sy) {
        // (image, sx, sy, sWidth, sHeight, cx, cy, cWidth, cHeight)
        ctx.drawImage(Player.IMG, sx, sy, this.xdim, this.ydim, ...this.pos, this.width, this.height);
    }

    drawSprite(ctx, img, col) {
        // (image, sx, sy, sWidth, sHeight, cx, cy, cWidth, cHeight)

        if (this.direction === "left") {
            let revx = -(this.pos[0] + this.width);
            ctx.save();
            ctx.scale(-1, 1);
            // this.pos[0] = -(this.pos[0] + this.width);
            ctx.drawImage(img, col * this.xdim, this.row * this.ydim, this.xdim, this.ydim, revx, this.pos[1], this.width, this.height);
            ctx.restore();
        }
        else if (this.direction === "right") {

            ctx.drawImage(img, col * this.xdim, this.row * this.ydim, this.xdim, this.ydim, ...this.pos, this.width, this.height);
        } else {
            ctx.drawImage(img, col * this.xdim, this.row * this.ydim, this.xdim, this.ydim, ...this.pos, this.width, this.height);

        }

    }

    bindKeys() {
        // if you use switch, case later, remember to add break after every condition
        window.addEventListener("keydown", event => {
            if (event.key === "ArrowUp" && !this.jumping) {
                if (this.yVelocity == 0) {
                    this.yVelocity -= 10;
                    // this.row = 19;
            
                    const jumpEffect = document.getElementById("jumpEffect");
                    jumpEffect.play();
                }
                this.jumping = true;
                // this.row = 20;
                // maybe check if yVelocity is > 0, then don't add more or something
            }
            if (event.key === "ArrowLeft") {
                this.left = true;
                this.direction = "left";
            }
            if (event.key === "ArrowRight") {
                this.right = true;
                this.direction = "right";
                // this.row = 5;
            }
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
        })
    }

    onGround() {
        return this.pos[0] >= this.CHEIGHT - this.height;
    }
    move() {
        // console.log("action row: ", this.row);
        // console.log(this.yVelocity);
        if (this.up) {
            this.frameSpeed = 30;
            this.maxFrames = 3;
            this.row = 19;
            // if (this.right) {
                
            //     this.frameSpeed = 10;
            //     this.xVelocity = 3;
            //     this.row = 5;
            //     this.maxFrames = 7;
            // } else if (this.left) {
            //     this.xVelocity = -3;
            //     this.frameSpeed = 10;
            // }
        } else 
        if (this.yVelocity < 0) {
            this.frameSpeed = 30;
            this.maxFrames = 7;
            this.row = 47;
        }
        // else if (this.up && this.yVelocity < 0) {
        //     this.maxFrames = 7;
        //     this.row = 47;
        // } else if (this.up && this.yVelocity > 0) {
        //     this.maxFrames = 7;
        //     this.row = 48;
        // }
        if (this.right) {
            this.frameSpeed = 10;
            this.xVelocity = 3;
            this.row = 5;
            this.maxFrames = 7;
        } else if (this.left) {
            this.xVelocity = -3;
            this.frameSpeed = 10;
        } 

        else {
            this.row = 2;
            this.frameSpeed = 40;
            this.maxFrames = 7;
            this.xVelocity = 0;
        }

        // if (this.up) {
        //     this.frameSpeed = 30;
        //     this.maxFrames = 3;
        //     this.row = 19;
        // }

        this.xVelocity *= this.friction;
        // console.log(this.pos[0]);
        // console.log(this.xVelocity);
        // console.log(Player.CWIDTH);

        // left and right bounds
        if (this.pos[0] + (this.width * .3) + this.xVelocity < 0
        || this.pos[0] + (this.width * .7) + this.xVelocity > Player.CWIDTH) {
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