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

document.addEventListener("DOMContentLoaded", () => {
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
        const game = new Game();
        const gameView = new GameView(game, ctx);
        gameView.start();
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

    
    const muteButton = document.getElementById("mute-button");
    const wrongEffect = document.getElementById("wrongEffect");
    const rightEffect = document.getElementById("rightEffect");
    const jumpEffect = document.getElementById("jumpEffect");

    
    
    muteButton.onclick = () => {
        if (muteButton.innerText === "Sound On") {
            muteButton.innerText = "Sound Off";
            
            wrongEffect.muted = false;
            rightEffect.muted = false;
            jumpEffect.muted = false;
        } else if (muteButton.innerText === "Sound Off") {
            muteButton.innerText = "Sound On"
            
            wrongEffect.muted = true;
            rightEffect.muted = true;
            jumpEffect.muted = true;
        }
    }

});
