const carouselSlide = document.querySelector(".slider");
const carouselImages = document.querySelectorAll(".slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const size = carouselImages[0].clientWidth;
const random = document.querySelector(".random");
let cnt = 1;

carouselSlide.style.transform = 'translateX(' + (-size*cnt) + 'px)';


next.addEventListener("click", () => {
    if(cnt >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    cnt++;
    carouselSlide.style.transform = 'translateX(' + (-size*cnt) + 'px)';
});

prev.addEventListener("click", () => {
    if(cnt <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    cnt--;
    carouselSlide.style.transform = 'translateX(' + (-size*cnt) + 'px)';
});

carouselSlide.addEventListener('transitionend', () =>{
    if (carouselImages[cnt].id == 'lastClone') {
        carouselSlide.style.transition = "none";
        cnt = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size*cnt) + 'px)';
    }

    if (carouselImages[cnt].id == 'firstClone') {
        carouselSlide.style.transition = "none";
        cnt = carouselImages.length - cnt;
        carouselSlide.style.transform = 'translateX(' + (-size*cnt) + 'px)';
    }
});

random.addEventListener("click", () =>{
    cnt = (cnt + Math.floor(Math.random() * 5)) % 5;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size*cnt) + 'px)';
});