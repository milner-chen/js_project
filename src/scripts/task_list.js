class TaskList {
    constructor(allItems) {
        this.pos = [25, 25];
        this.width = 150;
        this.height = 100;
        this.allItems = allItems;
        this.list = this.generateList();
        this.found = [];
        
    window.list = this.list;
    }

    generateList() {
        // while (this.list.length < this.allItems.length) {
            
        // }
        
        // hardcoding...
        return this.list = this.allItems;
    }

    isNextItem(item) {
        return item.type === this.allItems.type;
    }

    drawList(ctx) {
        ctx.strokeStyle = "#a9c4f5";
        ctx.fillStyle = "#7ba5f0";
        // ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.roundRect(this.pos[0], this.pos[1], 20 * (this.list.length), this.height, 5);
        ctx.stroke();
        ctx.fill();
    }

    drawContents(ctx, list) {
        ctx.font = "20px Cute Font";
        ctx.fillStyle = "black";
        for (let i = 0; i < list.length / 2; i++) {
            let task = list[i];
            // ctx.fillText(task.type, 50, 50 + (i * 15));
            // console.log(task.type);
            task.draw(ctx, [35 + (i * 30), 50]);
        }
    }

    draw(ctx) {
        this.drawList(ctx);
        // console.log(this.list);
        this.drawContents(ctx, list);
    }
}

export default TaskList;