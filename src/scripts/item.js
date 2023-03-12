class Item {
    constructor(type, pos) {
        this.type = type;
        this.width;
        this.height;
        this.color;
        this.pos = pos;
        if (this.type === "fish") {
            // this.width = 15;
            // this.height = 10;
            // this.color = "coral";
            this.createFish();
        }
    }

    createFish() {
        this.width = 15;
        this.height = 10;
        this.color = "coral";
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.strokeRect(this.pos[0], this.pos[1], this.width, this.height);
        ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }
}

export default Item;