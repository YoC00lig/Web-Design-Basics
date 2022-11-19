
function myFunc() {
    let name = prompt("Podaj swoje imię");
    if (name != null) {
        document.getElementById("imie").innerHTML = name;
    }
}