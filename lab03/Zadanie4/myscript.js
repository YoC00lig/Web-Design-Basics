let unlockBtn = document.getElementById("unlock");
let incrementBtn = document.getElementById("increment");
let cnt = document.getElementById("cnt");
let isBlocked = true;
let clickNumber = 0;


function unlock() {
    if (isBlocked) {
        isBlocked = false;
        incrementBtn.addEventListener('click', increment);
        unlockBtn.innerHTML = "Lock and reset";
        incrementBtn.innerHTML = "increment";
    }

    else {
        isBlocked = true;
        clickNumber = 0;
        cnt.innerHTML = 0;
        incrementBtn.removeEventListener('click', increment);
        unlockBtn.innerHTML = "Unlock increment button";
        incrementBtn.innerHTML = "Incrementation blocked";
    }
}

function increment() {
    clickNumber++;
    cnt.innerHTML = clickNumber;
}
