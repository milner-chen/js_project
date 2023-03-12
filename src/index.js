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
    - create the map you want -> platforms + items
    - do collision detection for all objects -> important
        - concat the items + platforms array
    - some game logic
        - generate the 'to-do list'
        - create something in game class to track what has been collected
            - maybe in a queue-like fashion
            - might have to move this out of game...

A little less immediate to-do's

    Platform/Static Object
    - you can hardcode the positions + they don't move
    - probably the same for the collectable items

    General to be fixed stuff
    - add some out of bounds check
        - created for bottom
    - do jumping animation
        - still need to fix the fact that you can jump many times

    Collision Detection
    - this is happening in the game class
    - get all the objects
    - check their positions

More far off, but important stuff that you cannot for get:
    - user instructions
    - basic stuff like title + such
    - rendering score
    - game over screen
    - music??
    all rather scattered + far off stuff
    - scrolling...
*/