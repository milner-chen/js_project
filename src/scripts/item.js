class Item {
    constructor(type, pos) {
        this.type = type;
        this.img = new Image();
        this.width = 32;
        this.height = 32;
        // this.color;
        this.pos = pos;
        // if (this.type === "fish") {
        //     // this.width = 15;
        //     // this.height = 10;
        //     // this.color = "coral";
        //     // this.createFish();
        // }
        switch (this.type) {
            case "bread":
                this.img.src = "src/assets/07_bread.png";
                break;
            case "jam":
                this.img.src = "src/assets/61_jam.png";
                break;
        }
    }

    // createFish() {
    //     // this.width = 15;
    //     // this.height = 10;
    //     // this.color = "coral";
    // }
    
    // createBread() {

    // }

    draw(ctx) {
        ctx.drawImage(this.img, ...this.pos, this.width, this.height);
        // ctx.fillStyle = this.color;
        // ctx.strokeStyle = "white";
        // ctx.lineWidth = 3;
        // ctx.strokeRect(this.pos[0], this.pos[1], this.width, this.height);
        // ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }
}

export default Item;