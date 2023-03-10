console.log("webpack is fine");

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
    canvas.style.border = "2px solid black";
    const ctx = canvas.getContext("2d");
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
    - do some key-binding
    - i think this goes hand in hand with character movement

A little less immediate to-do's

    Platform/Static Object
    - make some damn platforms
    - just pick whatever, even if it's ugly, for now
    - you can hardcode the positions + they don't move
    - probably the same for the collectable items

    Collision Detection
    - this is happening in the game class
    - get all the objects
    - check their positions
*/