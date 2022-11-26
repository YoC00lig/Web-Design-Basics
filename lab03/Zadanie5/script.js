const propagation = document.getElementById("propagation");
let propagationOn = false;
const change = document.getElementById("change");
let changeOn = false;


const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const red = document.getElementById("red");
const list = document.getElementById("inf");
const score = document.getElementById("score");
let cnt = 0;
let flag = false;

red.addEventListener("click", e => {RedAdd(e);},{capturing:false});
yellow.addEventListener("click", e =>{YellowAdd(e);},{capturing:false});
blue.addEventListener("click", e => {BlueAdd(e);},{capturing:false});


function changePropagation() {
    if (propagationOn) {
        propagation.style.backgroundColor = "green";
        propagation.innerHTML = "Start propagation";
        propagationOn = false;
    }
    else {
        propagation.style.backgroundColor = "red";
        propagation.innerHTML = "Stop propagation";
        propagationOn = true;
    }
};

// function removeAllCapturing() {
//     red.removeEventListener("click", e => {RedAdd(e);},{capturing:false});
//     yellow.removeEventListener("click", e =>{YellowAdd(e);},{capturing:false});
//     blue.removeEventListener("click", e => {BlueAdd(e);},{capturing:false});
//     red.removeEventListener("click", e => {RedAdd(e);},{capturing:true});
//     yellow.removeEventListener("click", e =>{YellowAdd(e);},{capturing:true});
//     blue.removeEventListener("click", e => {BlueAdd(e);},{capturing:true});
// }

// TODO changeorder
function changeOrder() {
    if (changeOn) {
        change.innerHTML = "Change order";
        // removeAllCapturing();
        // red.addEventListener("click", e => {RedAdd(e);},{capturing:false});
        // yellow.addEventListener("click", e =>{YellowAdd(e);},{capturing:false});
        // blue.addEventListener("click", e => {BlueAdd(e);},{capturing:false});
        changeOn = false;

    }
    else {
        change.innerHTML = "Previous order";
        // removeAllCapturing();
        // red.addEventListener("click", e => {RedAdd(e);},{capturing:true});
        // yellow.addEventListener("click", e =>{YellowAdd(e);},{capturing:true});
        // blue.addEventListener("click", e => {BlueAdd(e);},{capturing:true});
        changeOn = true;
    }
};

function reset() {
    cnt = 0;
    score.innerHTML = cnt;
    propagationOn = false;
    changeOn = false;
    propagation.innerHTML = "Start propagation";
    propagation.style.backgroundColor = "green";
    change.innerHTML = "Change order";
    document.querySelectorAll('.to-be-deleted').forEach(e => e.remove());
    red.classList.remove('disabled')
    yellow.classList.remove('disabled')
    blue.classList.remove('disabled')
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "yellow";
};

function message(color, value) {
    const li = document.createElement("li");
    li.classList.add("info");
    li.classList.add("to-be-deleted")
    li.textContent = `You clicked on ${color}, you received ${value} points`
    li.style.backgroundColor = `${color}`
    list.insertBefore(li, list.firstChild)
};

function verify() {
    if (cnt >= 30) {
        red.classList.add('disabled');
        red.style.backgroundColor = "rgb(212, 220, 226)";
    }
    if (cnt >= 50) {
        yellow.classList.add('disabled');
        yellow.style.backgroundColor = "rgb(212, 220, 226)";
    }
};

function BlueAdd(e) {
    cnt += 1;
    score.innerHTML = cnt;
    verify();
    message("blue", 1);
};

function YellowAdd(event) {
    if (propagationOn && changeOn && cnt < 50) {
        cnt += 14;
        message("blue", 1);
        message("red", 8);
        message("yellow", 5);
        event.stopPropagation();
    }

    else if (!propagationOn && cnt < 50) {
        cnt += 5;
        event.stopPropagation();
        message("yellow", 5);
    }
    else if (propagationOn && cnt < 50){
        cnt += 5;
        message("yellow", 5);
    }
    verify();
    score.innerHTML = cnt;
}


function RedAdd(event) {
    if (propagationOn && changeOn && cnt < 30) {
        cnt += 9;
        message("blue", 1);
        message("red", 8);
        event.stopPropagation();
    }
    else if (!propagationOn && cnt < 30) {
        cnt += 8;
        event.stopPropagation();
        message("red", 8);
    }
    else if (propagationOn && cnt < 30){
        cnt += 8;
        message("red", 8);
    }
    verify();
    score.innerHTML = cnt;
    red.removeEventListener();
}


