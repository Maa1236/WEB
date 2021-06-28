var background = document.getElementById("wrapp");
var body = document.querySelector("body");
var mario = document.getElementById("mario");
var snowflake = document.getElementById("snow");
var x = 0;
var y = "0px"
var z = 0;


function marionRun(e) {


    if (e.key === "ArrowRight") {
        mario.src = "mario_running.gif";
        mario.style.top = "400px";
        mario.style.width = '180px';
    }
}

function moveBackground(e) {
    var run1 = e.keyCode;
    if (run1 === 39) {
        background.style.backgroundPosition = x + "px " + y;
        x -= 20;
    }
}

function moveSnow(e) {
    var snow = e.keyCode;
    if (snow === 39) {
        snowflake.style.backgroundPositionY = z + "px";
        z += 20;
    }
}

body.addEventListener("keydown", moveSnow);


body.addEventListener("keydown", marionRun);
body.addEventListener("keydown", moveBackground);




function marioStop(e) {

    if (e.key === "ArrowRight") {
        mario.src = "mario.png";
        mario.style.top = "400px";
        mario.style.width = "210px";

    }
}

body.addEventListener("keyup", marioStop)