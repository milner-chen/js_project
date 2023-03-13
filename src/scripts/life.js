class Life {
    constructor() {
        this.img = new Image();
        this.img.src = "src/assets/heart.png";
        this.sx = 0;
        this.sy = 0;
        this.width = 50;
        this.height = 50;
        this.scale = 2.5;
    }

    draw(ctx, dx, dy) {
        ctx.drawImage(this.img, this.sx, this.sy, this.width, this.height, dx, dy, this.width * this.scale, this.height * this.scale);
    }
}

export default Life;