console.log("webpack is fine");

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

    const game = new Game();
    new GameView(game, ctx).start();

});

/*
Some questions:
    do we have to check img.onload()? is there a different way? probs not tbh

REMINDER:
    ANIMATION IS NOT THE PRIORITY!!!
    GET OTHER STUFF DONE FIRSTTT!!!

Some immediate to-do's
    - some game logic
        - add lives -> where should i put this logic? fr...
        - timer?
    

A little less immediate to-do's

    The entire map is hardcoded at the moment
        - idk how you are going to expand this...
        - more levels?

    General to be fixed stuff:
    - task list moves
        - console log the pos, width, and length
    - remove the border on the platforms

More far off, but important stuff that you cannot for get:
    - user instructions
    - game over screen
    - music??
    all rather scattered + far off stuff
    - scrolling...
*/