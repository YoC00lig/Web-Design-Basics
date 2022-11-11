let add = document.getElementById('btn1');
let remove = document.getElementById('btn2');
let ul = document.getElementById('list');
let cnt = 0;

function addToList() {
    cnt++;
    let message = window.prompt("Napisz swoją notatkę:");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(message));
    ul.appendChild(li);
}

function removeFromList() {
    if (cnt>0) {
        ul.removeChild(ul.childNodes[0]);
    }
    cnt--;
}