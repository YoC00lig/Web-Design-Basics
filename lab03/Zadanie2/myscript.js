let cnt = 1;
let colors = ['red', 'blue', 'green'];
let pictures = ['gory.png', 'morze.png', 'las.png'];
let img = document.getElementById('image');
let btn = document.getElementById('demo')

function myFunc() {
    img.style.borderColor = colors[cnt%3];
    img.src = pictures[cnt%3];
    cnt++;
}