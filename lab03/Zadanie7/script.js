const mod1 = document.querySelector('.mod1');
const mod2 = document.querySelector('.mod2');
const mod3 = document.querySelector('.mod3');
const mod4 = document.querySelector('.mod4');
const mod5 = document.querySelector('.mod5');
const mod6 = document.querySelector('.mod6');
const mod7 = document.querySelector('.mod7');
const overlay = document.querySelector('.overlay');
const buttons = document.querySelectorAll('.btn');
const modals = document.querySelectorAll('.mod');
let malopolska = '';
let doubleA = '';
let over100k ='';
let open = false;


overlay.addEventListener('click', function() {
    overlay.classList.add('hidden');
    for(let i = 0; i < modals.length; i++){
        modals[i].classList.add('hidden')
    }
});


for (let i = 0; i < buttons.length; i++)
    buttons[i].addEventListener('click', function (){
        overlay.classList.remove('hidden')
        modals[i].classList.remove('hidden')
    }
)

function getMalopolska(element) {
    if (element.province === "małopolskie"){
        malopolska += `${element.name}, `;
    }
};

function getDoubleA(element) {
    if(element.name.split('a').length === 3) { // przecina słowo kiedy spotka "a", jesli przetnie 2 razy to wtedy słowo jest w 3 częsciach
        doubleA += `${element.name}, `;
    }
};

function fifth(data){ 
    data.sort((x, y) => y.density - x.density);
    return data[4].name;
};


function cityOver100k(element) {
    if (element.people > 10**5){
        over100k += `${element.name} City, `;
    }
};

function numCities80k(data) {
    return data.filter(element => element.people > 8 * 10 ** 4).length;
};

function areaP(data) {
    const pCities = data.filter(element =>  element.township.toLowerCase().startsWith('p'));
    const num = pCities.lenght;
    const avg = pCities.reduce((accumulator, element) => accumulator + element.area, 0) / num || 0 ;
    return avg.toFixed(2);
};

function checkPomorskie(data) {
    const pomorskie = data.filter(element => element.province == "pomorskie");
    const elemOver5k = data.filter(element => element.province == "pomorskie");
    if (pomorskie.lenght === elemOver5k) return true;
    else return elemOver5k.lenght;
};

async function loadCities(){

    const response = await fetch("http://localhost:3000/cities?");
    const data = await response.json();
    const fifthCity = fifth(data);
    const over80k = numCities80k(data);
    const avgArea = areaP(data);
    const pomorskieNum = checkPomorskie(data);
    
    for (let element of data) {
        getMalopolska(element);
        getDoubleA(element);
        cityOver100k(element);
    }

    mod1.textContent = `Miasta tylko z wojewodztwa malopolskiego: ${malopolska}`;
    mod2.textContent = `Miasta, ktore w swojej nazwie posiadaja wyłącznie dwa znaki 'a', to: ${doubleA}`;
    mod3.textContent = `Miasto piąte pod względem zaludnienia to ${fifthCity}`;
    mod4.textContent = `Miasta powyżej 100 tys. mieszkancow to: ${over100k}`;
    mod5.textContent = `Więcej jest miast, które mają po${over80k > data.length ? 'wy' : 'ni'}żej 80000 mieszkańców. 
                        Liczba miast, liczących powyżej 80000 mieszkańców to ${over80k},
                        Liczba miast, liczących co najwyżej 80000 mieszkańców to ${data.length - over80k}`;
    mod6.textContent = `Średnia powierzchnia miast z powiatów zaczynających się na literkę "P" wynosi ${avgArea}`;
    mod7.textContent = typeof cityNum === "number" ?
                       `Nie wszystkie miasta sa wieksze od 5000 osob, takich miast jest ${pomorskieNum}` :
                       'wszystkie miasta z wojewodztwa pomorksiego sa wieksze od 5000 osob';
};

loadCities();

