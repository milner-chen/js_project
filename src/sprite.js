class Sprite {
    constructor() {
        this.img = new Image();
        this.img.src = "src/assets/cat_sheet.png";
        // this.row = row;
        // this.col = col;
        this.width = 32;
        this.height = 32;
        // this.frames = [
        //     this.sprite.testSprite(ctx, 2, 0),
        //     this.sprite.testSprite(ctx, 2, 1),
        //     this.sprite.testSprite(ctx, 2, 2),
        //     this.sprite.testSprite(ctx, 2, 3),
        //     this.sprite.testSprite(ctx, 2, 4),
        //     this.sprite.testSprite(ctx, 2, 5),
        //     this.sprite.testSprite(ctx, 2, 6),
        //     this.sprite.testSprite(ctx, 2, 7),
        // ];
    }

    // init() {
    //     this.sprite.testSprite(ctx, 2, 0);
    //     this.sprite.testSprite(ctx, 2, 1);
    //     this.sprite.testSprite(ctx, 2, 2);
    //     this.sprite.testSprite(ctx, 2, 3);
    //     this.sprite.testSprite(ctx, 2, 4);
    //     this.sprite.testSprite(ctx, 2, 5);
    //     this.sprite.testSprite(ctx, 2, 6);
    //     this.sprite.testSprite(ctx, 2, 7);
    //     // this.sprite.testSprite(ctx, 2, 8);
    // }

    testSprite(ctx, row, col, dx, dy) {
        ctx.drawImage(this.img, col * this.width, row * this.height, this.width, this.height, dx, dy, 160, 160);
        // const catBorder = new Border(walkingCat);                                        255 145
    }

    // drawFrame(ctx, currFrame) {
    //     ctx.drawImage()
    // }
}

export default Sprite;