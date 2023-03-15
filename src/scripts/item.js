class Item {
    constructor(type, pos) {
        this.type = type;
        this.img = new Image();
        this.width = 32 * 1.1;
        this.height = 32 * 1.1;
        this.collision = false; // if collision is false && hascollision -> decrease lives
        // this.color;
        this.pos = pos;

        switch (this.type) {
            case "bread":
                this.img.src = "src/assets/07_bread.png";
                break;
            case "jam":
                this.img.src = "src/assets/61_jam.png";
                break;
            case "dumplings":
                this.img.src = "src/assets/36_dumplings.png";
                break;
            case "egg":
                this.img.src = "src/assets/38_friedegg.png";
                break;
            case "jelly":
                this.img.src = "src/assets/59_jelly.png";
                break;
            case "pancakes":
                this.img.src = "src/assets/79_pancakes.png";
                break;
            case "strawberrycake":
                this.img.src = "src/assets/90_strawberrycake.png";
                break;
        }
    }

    draw(ctx, pos) {
        pos ||= this.pos;
        ctx.drawImage(this.img, ...pos, this.width, this.height);
        // ctx.fillStyle = this.color;
        // ctx.strokeStyle = "white";
        // ctx.lineWidth = 3;
        // ctx.strokeRect(this.pos[0], this.pos[1], this.width, this.height);
        // ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }
}

export default Item;