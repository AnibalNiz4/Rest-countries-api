// appendChild to countrys
const countrys = document.querySelector('.countrys');

//filter
const arrow_filter = document.querySelector('.arrow_filter');
const countrys_filter = document.querySelector('.countrys_filter');

const africa = document.querySelector('.africa');
const america = document.querySelector('.america');
const asia = document.querySelector('.asia');
const europe = document.querySelector('.europe');
const oceania = document.querySelector('.oceania');
const all = document.querySelector('.all');

//input search
const button = document.querySelector('.button');
const input = document.querySelector('.input_text');

//light mode
const dark_mode = document.querySelector('.dark_mode');
const bkg_nav = document.querySelector('.bkg_nav');
const container = document.querySelector('.container');

//dark or light page
if(!localStorage.getItem('darkMode')){
    localStorage.setItem("darkMode", "dark_mode");    
}
const toggleMode = localStorage.getItem("darkMode");

if(toggleMode == "light_mode"){
    bkg_nav.classList.toggle("light_mode");
    container.classList.toggle("light_mode");
    document.body.style.background = 'rgb(245, 245, 245)';
    arrow_filter.src = '/scss/img/expand_more_black_24dp.svg';
}
else if(toggleMode == "dark_mode"){
    bkg_nav.classList.toggle("dark_mode");
    container.classList.toggle("dark_mode");
    document.body.style.background = 'rgb(32, 44, 55)';
    arrow_filter.src = '/scss/img/expand_more_white_24dp.svg';
}

dark_mode.addEventListener('click', () =>{

    if(bkg_nav.classList.contains('light_mode')){
        bkg_nav.classList.toggle("light_mode");
        container.classList.toggle("light_mode");
        bkg_nav.classList.toggle("dark_mode");
        container.classList.toggle("dark_mode");
        document.body.style.background = 'rgb(32, 44, 55)';
        arrow_filter.src = '/scss/img/expand_more_white_24dp.svg';
        localStorage.setItem("darkMode", "dark_mode");
    }
    else{
        bkg_nav.classList.toggle("light_mode");
        container.classList.toggle("light_mode");
        bkg_nav.classList.toggle("dark_mode");
        container.classList.toggle("dark_mode");
        document.body.style.background = 'rgb(245, 245, 245)';
        arrow_filter.src = '/scss/img/expand_more_black_24dp.svg';
        localStorage.setItem("darkMode", "light_mode");
    }
});

arrow_filter.addEventListener('click', () =>{
    if(countrys_filter.style.display == 'flex'){
        countrys_filter.style.display = 'none';
    }
    else{
        countrys_filter.style.display = 'flex';
    }
});

//fetch('https://restcountries.eu/rest/v2/all')
fetch('https://restcountries.com/v2/all')
.then(res => res.json())
.then(data => {
    if (data.code === 422) {
        alert('Oops, al parecer hubo un error!!!') 
    }
    else{
        for(let i = 0; i<data.length; i++){
            createCountry(data[i].alpha3Code, data[i].flag, data[i].name, data[i].population, data[i].region, data[i].capital);
        }
    }
});

const createCountry = (cod, img, name, pop, reg, cap) =>{
    const a = document.createElement('a');
    const country_data = document.createElement('div');
    const flag = document.createElement('div');
    const country_text = document.createElement('div');
    const h4 = document.createElement('h4');
    const population = document.createElement('div');
    const pop_text = document.createElement('p');
    const pop_data = document.createElement('p');
    const region = document.createElement('div');
    const reg_text = document.createElement('p');
    const reg_data = document.createElement('p');
    const capital = document.createElement('div');
    const cap_text = document.createElement('p');
    const cap_data = document.createElement('p');


    country_data.classList.add('country_data');
    flag.classList.add('flag');
    country_text.classList.add('country_text');
    h4.classList.add('country_name');
    population.classList.add('population');
    pop_data.classList.add('population_data');
    region.classList.add('region');
    reg_data.classList.add('region_data');
    capital.classList.add('capital');
    cap_data.classList.add('capital_data');


    a.href = 'country.html?'+cod;
    pop_text.textContent = 'Population:'
    reg_text.textContent = 'Region:'
    cap_text.textContent = 'Capital:'
    flag.style.backgroundImage = `url(${img})`;
    h4.textContent = name;
    pop_data.textContent = pop;
    reg_data.textContent = reg;
    cap_data.textContent = cap;


    countrys.appendChild(a);
    a.appendChild(country_data);
    country_data.appendChild(flag);
    country_data.appendChild(country_text);
    country_text.appendChild(h4);
    country_text.appendChild(population);
    population.appendChild(pop_text);
    population.appendChild(pop_data);
    country_text.appendChild(region);
    region.appendChild(reg_text);
    region.appendChild(reg_data);
    country_text.appendChild(capital);
    capital.appendChild(cap_text);
    capital.appendChild(cap_data);
}

africa.addEventListener('click', () =>{
    for(let i = 0; i<countrys.children.length; i++){
        if(countrys.children[i].children[0].lastElementChild.childNodes[2].childNodes[1].innerText == 'Africa'){
            countrys.children[i].style.display = 'inline-block';
        }
        else{
            countrys.children[i].style.display = 'none';
        }
    }
    countrys_filter.style.display = 'none';
});

america.addEventListener('click', () =>{
    for(let i = 0; i<countrys.children.length; i++){
        if(countrys.children[i].children[0].lastElementChild.childNodes[2].childNodes[1].innerText == 'Americas'){
            countrys.children[i].style.display = 'inline-block';
        }
        else{
            countrys.children[i].style.display = 'none';
        }
    }
    countrys_filter.style.display = 'none';
});

asia.addEventListener('click', () =>{
    for(let i = 0; i<countrys.children.length; i++){
        if(countrys.children[i].children[0].lastElementChild.childNodes[2].childNodes[1].innerText == 'Asia'){
            countrys.children[i].style.display = 'inline-block';
        }
        else{
            countrys.children[i].style.display = 'none';
        }
    }
    countrys_filter.style.display = 'none';
});

europe.addEventListener('click', () =>{
    for(let i = 0; i<countrys.children.length; i++){
        if(countrys.children[i].children[0].lastElementChild.childNodes[2].childNodes[1].innerText == 'Europe'){
            countrys.children[i].style.display = 'inline-block';
        }
        else{
            countrys.children[i].style.display = 'none';
        }
    }
    countrys_filter.style.display = 'none';
});

oceania.addEventListener('click', () =>{
    for(let i = 0; i<countrys.children.length; i++){
        if(countrys.children[i].children[0].lastElementChild.childNodes[2].childNodes[1].innerText == 'Oceania'){
            countrys.children[i].style.display = 'inline-block';
        }
        else{
            countrys.children[i].style.display = 'none';
        }
    }
    countrys_filter.style.display = 'none';
});

all.addEventListener('click', () =>{
    for(let i = 0; i<countrys.children.length; i++){
        countrys.children[i].style.display = 'inline-block';
    }
    countrys_filter.style.display = 'none';
});



button.addEventListener('click', (e) =>{
    e.preventDefault();
});

input.addEventListener('keyup', (e) =>{
    let input_value = e.path[0].value;
    input_value = input_value.toLowerCase();

    if(input_value.length > 0){
        for(let i = 0; i<countrys.children.length; i++){
            let info = countrys.children[i].children[0].lastElementChild.firstElementChild.innerText;
            info = info.toLowerCase();
            let res = info.indexOf(input_value);
            if(res != -1){
                countrys.children[i].style.display = 'inline-block';
            }
            else if(res == -1){
                countrys.children[i].style.display = 'none';
            }
        }
    }

    if(input_value == 0){
        for(let i = 0; i<countrys.children.length; i++){
            countrys.children[i].style.display = 'inline-block';
        }
    }
});