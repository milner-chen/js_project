console.log("player class is working");
class Player {
    // class variables
    static IMG = new Image();
    constructor(pos) {
        Player.IMG.src = "src/assets/cat.png";
        // this.IMG = IMG;
        this.pos = pos;
        this.dims = 32; // dimensions of the actual image
        this.size = this.dims * 1.5; //scaled size
    }

    draw(ctx, sx, sy) {
        // (image, sx, sy, sWidth, sHeight, cx, cy, cWidth, cHeight)
        ctx.drawImage(Player.IMG, sx, sy, this.dims, this.dims, ...this.pos, this.size, this.size);
    }

    move(dir) {
        this.pos = [this.pos[0] + dir[0], this.pos[1] + dir[1]];
    }
}

export default Player;