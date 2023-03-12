import Platform from "./platform";
import Player from "./player";

class Border {
    constructor(obj) {
        this.type = obj.constructor;
        this.pos = obj.pos;
        this.width = obj.width;
        this.height = obj.height;
    }

    draw(ctx) {
        ctx.strokeStyle = "red";
        ctx.lineWidth = 1;
        ctx.beginPath();
        if (this.type === Platform) {
            ctx.roundRect(this.pos[0], this.pos[1], this.width, this.height, 5);
        } else {
            ctx.rect(this.pos[0], this.pos[1], this.width, this.height);
        }
        ctx.stroke();
    }
}

export default Border;