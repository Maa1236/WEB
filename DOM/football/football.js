var body = document.querySelector("body");
var button = document.querySelector("button");
var player = document.querySelector("img");

function move(event) {
    var x = event.offsetX - 50;
    var y = event.offsetY - 50;

    player.style.top = y + "px";
    player.style.left = x + "px";

}
body.addEventListener("click", move);

function turnOff() {
    body.removeEventListener("click", move);
}

button.addEventListener("click", turnOff);