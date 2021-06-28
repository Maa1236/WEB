var button1 = document.getElementById("el");
var stopButton = document.getElementById("turnOff");
var interval;


function changeBackground() {
    var body = document.querySelector("body");
    body.classList.toggle("back1");
}

function turnOn() {
    interval = setInterval(changeBackground, 1000);
}


function turnOff() {
    clearInterval(interval);
}