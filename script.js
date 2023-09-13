const searchBtn = document.getElementById('search-btn');
const countryInput = document.getElementById('country-input');

searchBtn.addEventListener('click', function() {
    let countryName = countryInput.value ;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data[0]);
        const capital = data[0].capital[0]
        const bendera = data[0].flags.svg;
        const population = data[0].population
        const nameCountry = data[0].name.common
        const benua = data[0].continents[0]
        const mataUang = Object.keys(data[0].currencies)[0]
        test.innerHTML = `
        <img src="${bendera}" class='flag-img'>
        <h2>${nameCountry}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${capital}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${benua}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${population}</span>
            </div>
        </div>
        
        
        `
    });

})


const animal = 'saya kamu dia mereka'
const splitt = animal.split(',')
console.log(splitt);