function present() {
    var li = document.getElementById("prvi").textContent;
    alert(li);
}
present();

function last(n) {
    document.getElementById("lista").lastElementChild.innerHTML = n;
}

last("mau");

/*creates dropdown witn inner HTML*/

function dropdowns(arr, node) {
    var toAdd = '<select name="travel">\n';
    arr.forEach(function(el) {
        toAdd += "<option value =" + el + ">" + el + "</option\n>"
    });
    toAdd += '</select>';
    // document.getElementById(node).innerHTML = toAdd;
    document.querySelector(".add" + " " + node).innerHTML = toAdd;
}

dropdowns(["1st option", "2nd option", "3rd option"], "*:first-child");
// dropdowns(['car', 'bike', 'plane'], "div:last-child");

/*creates dropdown with DOM Manipulation*/

function dropdowns1(array, node) {
    var toAdd = document.createElement('select');
    var someDiv = document.querySelector(".add" + " " + node);

    array.forEach(function(item) {
        var option = document.createElement("option");
        var text = document.createTextNode(item);
        option.appendChild(text);
        toAdd.appendChild(option);
        someDiv.appendChild(toAdd);
    });

}

dropdowns1(['car', 'bike', 'plane'], "div:last-child")


function checkForm() {

    var ul = document.querySelectorAll('form input');
    for (var i = 0; i <= ul.length; i++) {
        if (!ul[i].value && ul[i].hasAttribute("required")) {
            // ul[i].classList.add("myStyle");
            ul[i].style.border = "2px solid red";
        }
    }
}

checkForm()