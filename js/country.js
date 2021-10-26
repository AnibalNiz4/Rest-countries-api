const back = document.querySelector('.back');
const country_flag = document.querySelector('.country_flag');
const country_tittle = document.querySelector('.country_tittle');
const native = document.querySelector('.native');
const popu = document.querySelector('.popu');
const regi = document.querySelector('.regi');
const sub = document.querySelector('.sub');
const capi = document.querySelector('.capi');
const tope = document.querySelector('.top');
const curr = document.querySelector('.curr');
const lang = document.querySelector('.lang');
const container_borders = document.querySelector('.container_borders');

//light mode
const dark_mode = document.querySelector('.dark_mode');
const bkg_nav = document.querySelector('.bkg_nav');
const container = document.querySelector('.container');
const back_arrow = document.querySelector('.back_arrow');

//dark or light page
if(!localStorage.getItem('darkMode')){
    localStorage.setItem("darkMode", "dark_mode");    
}
const toggleMode = localStorage.getItem("darkMode");

if(toggleMode == "light_mode"){
    bkg_nav.classList.toggle("light_mode");
    container.classList.toggle("light_mode");
    document.body.style.background = 'rgb(245, 245, 245)';
    back_arrow.src = '/scss/img/arrow_back_black_24dp.svg';
}
else if(toggleMode == "dark_mode"){
    bkg_nav.classList.toggle("dark_mode");
    container.classList.toggle("dark_mode");
    document.body.style.background = 'rgb(32, 44, 55)';
    back_arrow.src = '/scss/img/arrow_back_white_24dp.svg';
}

dark_mode.addEventListener('click', () =>{

    if(bkg_nav.classList.contains('light_mode')){
        bkg_nav.classList.toggle("light_mode");
        container.classList.toggle("light_mode");
        bkg_nav.classList.toggle("dark_mode");
        container.classList.toggle("dark_mode");
        document.body.style.background = 'rgb(32, 44, 55)';
        back_arrow.src = '/scss/img/arrow_back_white_24dp.svg';
        localStorage.setItem("darkMode", "dark_mode");
    }
    else{
        bkg_nav.classList.toggle("light_mode");
        container.classList.toggle("light_mode");
        bkg_nav.classList.toggle("dark_mode");
        container.classList.toggle("dark_mode");
        document.body.style.background = 'rgb(245, 245, 245)';
        back_arrow.src = '/scss/img/arrow_back_black_24dp.svg';
        localStorage.setItem("darkMode", "light_mode");
    }
});

let dom = window.location.search;
let cod = dom.slice(1);

fetch('https://restcountries.com/v2/all')
.then(res => res.json())
.then(data => {
    if (data.code === 422) {
        alert('no anda we') 
    }
    else{
        for(let i = 0; i<data.length; i++){
            if(cod == data[i].alpha3Code){
                let flag = data[i].flag;
                country_flag.style.backgroundImage = `url(${flag})`;
                country_tittle.innerHTML = data[i].name;
                native.innerHTML = data[i].nativeName;
                popu.innerHTML = data[i].population;
                regi.innerHTML = data[i].region;
                sub.innerHTML = data[i].subregion;
                capi.innerHTML = data[i].capital;
                tope.innerHTML = data[i].topLevelDomain;
                curr.innerHTML = data[i].currencies[0].name;
                for(let j = 0; j<data[i].languages.length; j++){
                    lang.innerHTML += data[i].languages[j].name;
                    if(j<data[i].languages.length-1){
                        lang.innerHTML += ', ';
                    }
                }
                for(let b = 0; b<data[i].borders.length; b++){
                    createBorder(data[i].borders[b], data[i].borders[b]);
                }
            }
        }
    }
});

const createBorder = (bor, cod) =>{
    const border = document.createElement('a');

    border.classList.add('borders');
    border.textContent = bor;
    border.href = 'country.html?'+cod;

    container_borders.appendChild(border);
}

back.addEventListener('click', () =>{
    window.history.back();
})