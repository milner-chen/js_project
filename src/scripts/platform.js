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
        // const gradient = ctx.createLinearGradient(this.pos[0] + (this.width * 0.10), this.pos[1], this.pos[0] + (this.width * 0.90), this.pos[1]);
        // gradient.addColorStop(0, "cadetblue");
        // gradient.addColorStop(0.5, "cornflowerblue");
        // gradient.addColorStop(1, "cadetblue");
        // ctx.fillStyle = gradient;
        
        // ctx.strokeRect(this.pos[0], this.pos[1], this.width, this.height);
        // ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
        
        ctx.beginPath();
        ctx.roundRect(this.pos[0], this.pos[1], this.width, this.height, 5);
        ctx.stroke();
        ctx.fill();
    }
}

export default Platform;