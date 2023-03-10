/*
class Example {
    constructor(ele) {
        this.ele = ele // this lost context; need bind
        this.ele.innerHTML = "<h1>It's CAPY ALIVEEEE!!!</h1>"
        this.handleClick = this.handleClick.bind(this);
            // redefining handleclick so that it is always binded
        this.ele.addEventListener("click", this.handleClick)
    }

    handleClick() {
        this.ele.children[0].innerText = "Ouch!"
    }
}

export default Example;
*/