var increment = 1;
var number = 1;

function incrementNumber() {
    number += increment;
}

function increaseIncrement() {
    increment += 1;
}

function updateUI() {
    document.getElementById("number").innerHTML = number;
    document.getElementById("increment").innerHTML = increment;
}

window.onload = function() {
    setInterval(updateUI, 10);
}
