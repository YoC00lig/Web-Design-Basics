let nameField = document.getElementById('nameField');
let phoneField = document.getElementById('phoneField');
const submit = document.querySelector(".button");
let list = document.querySelector('.book');

function isCorrectName(nameAndSurname) {
    let regName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
    return regName.test(nameAndSurname);
};
function isCorrectPhone(phone) {
    let regName = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
    return regName.test(phone);
};

document.addEventListener("click", e => {
    if (e.target.className == "fa-solid fa-trash"){
        e.target.parentElement.remove();
    }
});

submit.addEventListener('click', e => {

    let name = nameField.value;
    let phone = phoneField.value;
    e.preventDefault();

    if(isCorrectName(name) && isCorrectPhone(phone)){
        const element = document.createElement('li');
        element.classList.add("list-element");
        element.innerHTML = `
                <h4>${name}</h4>
                <p>${phone}</p>
                <i class="fa-solid fa-trash"></i>
        `;
        list.appendChild(element);
        nameField.value = '';
        phoneField.value = '';
    }
    else{alert("Podano niepoprawne dane.");}
});