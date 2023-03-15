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
    canvas.style.border = "2px solid coral";
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    window.ctx = ctx;

    // const game = new Game();
    // ctx.clearRect(0, 0, 1000, 600);
    // ctx.fillStyle = "#921208";
    // ctx.roundRect(this.pos[0], this.pos[1], listWidth, this.height, 5);
    // ctx.fill();
    // ctx.beginPath();
    // ctx.drawImage(Game.BG, 0, 0, Game.DIM_X, Game.DIM_Y);
    
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", () => {
        new GameView(game, ctx).start();
        startButton.style.display = "none";
    });

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