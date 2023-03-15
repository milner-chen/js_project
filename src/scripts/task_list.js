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
        return item.type === this.allItems[0].type;
    }

    drawList(ctx) {
        // ctx.strokeStyle = "#a9c4f5";
        // ctx.fillStyle = "#7ba5f0";
        ctx.strokeStyle = "coral";
        // ctx.strokeStyle = "#f8a379";
        // ctx.fillStyle = "#d79e9a";
        ctx.fillStyle = "#921208";
        ctx.lineWidth = 3;
        ctx.beginPath();
        let listWidth =  35 * (this.list.length);
        if (listWidth < 200) listWidth = 200;
        // could have a minimum width + expand from there..
        ctx.roundRect(this.pos[0], this.pos[1], listWidth, this.height, 5);
        ctx.stroke();
        ctx.fill();

        ctx.font = "33px Cute Font";
        ctx.textAlign = "left";
        ctx.fillStyle = "beige";
        ctx.strokeStyle = "921208";
        ctx.fillText("Collect in Order!", this.pos[0] + 15, 50);
    }

    drawContents(ctx, list) {
        // ctx.font = "20px Cute Font";
        // ctx.fillStyle = "black";
        for (let i = 0; i < list.length; i++) {
            let task = list[i];
            // ctx.fillText(task.type, 50, 50 + (i * 15));
            // console.log(task.type);
            task.draw(ctx, [this.pos[1] + 15 + (i * 30), 75]);
        }
    }

    draw(ctx) {
        this.drawList(ctx);
        // console.log(this.list);
        this.drawContents(ctx, list);
    }
}

export default TaskList;