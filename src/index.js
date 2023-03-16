console.log("webpack is fine");

import Sprite from "./sprite";
window.Sprite = Sprite;

import Border from "./scripts/border";
window.Border = Border;

import Platform from "./scripts/platform";
window.Platform = Platform;

import Player from "./scripts/player";
window.Player = Player;

import Game from "./scripts/game";
window.Game = Game;

import GameView from "./scripts/game_view";
window.GameView = GameView;

// import Example from "./scripts/example";
// const width = 800;
// const height = 600;

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");
    const canvas = document.getElementById("game-canvas");
    window.canvas = canvas;
    canvas.width = Game.DIM_X;
    canvas.height = Game.DIM_Y;
    canvas.style.border = "3px solid coral";
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    window.ctx = ctx;

    // ctx.clearRect(0, 0, 1000, 600);
    // ctx.fillStyle = "#921208";
    // ctx.roundRect(this.pos[0], this.pos[1], listWidth, this.height, 5);
    // ctx.fill();
    // ctx.beginPath();
    // ctx.drawImage(Game.BG, 0, 0, Game.DIM_X, Game.DIM_Y);
    
    const startButton = document.getElementById("start-button");
    const startScreen = document.getElementById("start-screen");
    startButton.addEventListener("click", () => {
        console.log("start button has been clicked");
        const game = new Game();
        // console.log(game.running);
        // game.running = true;
        // console.log(game.running);
        const gameView = new GameView(game, ctx);
        // console.log(gameView);
        // gameView.running = true;
        gameView.start();
        // console.log(gameView.count);
        // this.count = timeStamp / 1000;
        // game.count = 0;
        startButton.style.display = "none";
        startScreen.style.display = "none";

    });

    const instructionsModal = document.getElementById("instructions-modal");
    const instructionsButton = document.getElementById("instructions-button");
    const close = document.getElementsByClassName("close")[0];

    close.onclick = () => {
        instructionsModal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target === instructionsModal) {

            instructionsModal.style.display = "none";
        }
    }

    instructionsButton.onclick = () => {
        instructionsModal.style.display = "block";
        // instructionsModal.style.backgroundColor = "black";
        
        // instructionsButton.style.backgroundColor = "coral";
    }

    const restart = document.getElementById("restart");
    restart.onclick = () => {
        const again = document.getElementById("start-screen");
        const againButton = document.getElementById("start-button");
        // const instructionsButton = document.getElementById("instructions-button");
        // instructionsButton.style.display = "none";
        again.style.display = "block";
        againButton.style.display = "block";
        restart.style.display = "none";
        
    }

});

/*
Some questions:
    do we have to check img.onload()? is there a different way? probs not tbh

REMINDER:
    - user instructions

Some immediate to-do's
    - game over -> being able to lose
    - user instructions
    

A little less immediate to-do's
    Maybe a direction flag:
        - this.left sets to left
        - this.right sets to right
        - add flag as a condition + not left and not right

    The entire map is hardcoded at the moment
        - idk how you are going to expand this...
        - more levels?

    General to be fixed stuff:

More far off, but important stuff that you cannot for get:
    - user instructions
    - game over screen
    - music??
    all rather scattered + far off stuff
    - scrolling...
*/