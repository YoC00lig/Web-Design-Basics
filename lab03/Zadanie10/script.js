const rectangle = document.querySelector(".circle-rectangle");
const circle = document.querySelector(".circle");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal-content");
const color = "rgb(171, 169, 169, 0.7)";
let open = false;

function changePlace(event) {
    if (rectangle.contains(event.target)) {
        let position = rectangle.getBoundingClientRect();
        let x = position.x;
        let y = position.y;
        let a = event.clientX;
        let b = event.clientY;
        circle.style.left = a - x + "px";
        circle.style.top = b - y + "px";
    }
    else if (overlay.contains(event.target) && !open){
        overlay.style.backgroundColor = color;
        overlay.style.zIndex = "5";
        modal.style.display = "block";
        open = true;
    }
    else if ((overlay.contains(event.target) && open) || close.contains(event.target)) {
        overlay.style.zIndex = "2";
        overlay.style.backgroundColor = "transparent";
        modal.style.display = "none";
        open = false;
    }
}

rectangle.addEventListener("click", e => {changePlace(e);});
overlay.addEventListener("click", e => {changePlace(e);});
close.addEventListener("click", e => {changePlace(e);});