class Platform {
    static IMG = new Image();
    constructor(pos, width, height) {
        this.pos = pos;
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        // ctx.strokeStyle = "white";
        ctx.strokeStyle = "coral";

        // ctx.fillStyle = "cadetblue";
        ctx.fillStyle = "#993300";
        ctx.lineWidth = 2;
        
        // ctx.strokeRect(this.pos[0], this.pos[1], this.width, this.height);
        // ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
        
        ctx.beginPath();
        ctx.roundRect(this.pos[0], this.pos[1], this.width, this.height, 5);
        ctx.stroke();
        ctx.fill();
    }
}

export default Platform;