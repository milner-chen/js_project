// import Example from "./scripts/example";
const width = 800;
const height = 600;

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");
    const canvas = document.getElementById("game-canvas");
    window.canvas = canvas;
    canvas.width = width;
    canvas.height = height;
    canvas.style.border = "2px solid black";
    const ctx = canvas.getContext("2d");

    // background image
    const bg = new Image();
    bg.onload = () => {
        ctx.drawImage(bg, 0, 0, width, height);
    };
    bg.src = "src/assets/bg_1.png";
    window.bg = bg;


    // character sprite sheet
    const cat = new Image();
    const cat_dim = 32;
    const cat_size = cat_dim * 1.5;
    // cat.src = "src/assets/cat_sheet.png";
    cat.src = "src/assets/cat.png";

    cat.onload = () => {
        ctx.drawImage(cat, 0, 0, cat_dim, cat_dim, 0, 500, cat_size, cat_size);
    };


});


/*
Some questions:
    do we have to check img.onload()? is there a different way? probs not tbh
    check to see if requestanimationframe is okay -> it should be since it's under canvas

REMINDER:
    ANIMATION IS NOT THE PRIORITY!!!
    GET OTHER STUFF DONE FIRSTTT!!!

Some immediate to-do's
    - separate logic for character into it's own class
    - can also separate background's logic into it's own class
    - feel free to do this AFTER it starts working

A little less immediate to-do's
    - make some damn platforms
    - just pick whatever, even if it's ugly, for now
    - you can hardcode the positions + they don't move
    - probably the same for the collectable items

*/