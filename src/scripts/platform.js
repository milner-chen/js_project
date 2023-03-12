class Platform {
    static IMG = new Image();
    constructor(pos, width, height) {
        this.pos = pos;
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ctx.fillStyle = "cadetblue";
        // const gradient = ctx.createLinearGradient(this.pos[0] + (this.width * 0.10), this.pos[1], this.pos[0] + (this.width * 0.90), this.pos[1]);
        // gradient.addColorStop(0, "cadetblue");
        // gradient.addColorStop(0.5, "cornflowerblue");
        // gradient.addColorStop(1, "cadetblue");

        // ctx.strokeStyle = 
        // ctx.fillStyle = gradient;
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.strokeRect(this.pos[0], this.pos[1], this.width, this.height);
        ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }
}

export default Platform;