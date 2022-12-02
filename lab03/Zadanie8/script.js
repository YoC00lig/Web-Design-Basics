const eye1 = document.querySelector('.eye1');
const eye2 = document.querySelector('.eye2');
const pass1 = document.getElementById('new');
const pass2 = document.getElementById('repeat');
const circle = document.querySelector('.icons');
let agree = document.querySelector('.disagree');
let newPassword = '';
let repeat = '';

function checkLength(pass){
    return pass.length >= 8;
}

function checkSpecialChar(pass){
    return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pass);
}

function checkCapital(pass){
    return /[A-Z]/.test(pass);
}

function checkDigit(pass){
    return /[0-9]/.test(pass);
}

function hide(number){
    document.querySelector(`.icon${number}`).classList.add('hidden')
}

function show(number){
    document.querySelector(`.icon${number}`).classList.remove('hidden')
}

function check(f, password, num){
    if (f(password)) {
        hide(`${num}1`);
        show(`${num}2`);
    }
    else {
        hide(`${num}2`);
        show(`${num}1`);
    }
};

eye1.addEventListener('click', function(){
    if(pass1.type === 'password'){
        pass1.type = 'text'
    }
    else {
        pass1.type = 'password'
    }

});

eye2.addEventListener('click', function(){
    if(pass2.type === 'password'){
        pass2.type = 'text'
    }
    else {
        pass2.type = 'password'
    }

});


pass1.addEventListener('keyup', function() {
    newPassword = pass1.value;
    check(checkLength, newPassword, 1);
    check(checkSpecialChar, newPassword, 2);
    check(checkCapital, newPassword, 3);
    check(checkDigit, newPassword, 4);
    if(newPassword === '' || repeat=== '' || repeat === newPassword){
        agree.classList.add("hidden")
    }
    else{
        agree.classList.remove("hidden")
    }
})

pass2.addEventListener('keyup', function() {
    repeat = pass2.value;
    if(newPassword === '' || repeat=== '' || repeat === newPassword){
        agree.classList.add("hidden")
    }
    else{
        agree.classList.remove("hidden")
    }
})


