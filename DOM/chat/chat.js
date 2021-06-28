var button = document.getElementById("btn");
var inputField = document.getElementById("input");
var chatArea = document.getElementById("chat");

function addText() {
    var textMessage = document.createElement("p");
    var text = document.createTextNode(inputField.value);
    textMessage.appendChild(text);
    chatArea.appendChild(textMessage);
    inputField.value = "";
}

button.addEventListener("click", addText);