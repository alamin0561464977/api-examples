const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};
loadCountries();

const displayCountries = (countries) => {
    const displayCountries = document.getElementById('countries');

    countries.forEach(country => {
        console.log(country)
        const div = document.createElement('div');
        div.classList.add('countries')
        div.innerHTML = `
        <h3>Name: ${country.capital}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')" class='button'>alamin</button>
        `
        displayCountries.appendChild(div)
    })
};

const loadCountryByName = name => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    // .then(res => res.json())
    // .then(data => console.log(data))
    // const url = `https://restcountries.com/v3.1/name/${name}`;
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => console.log(data))

}

// const as = (country) => {
//     const cc = document.getElementById('c')
//     const h3 = document.createElement('h3')
//     h3.innerText = `Name: ${country}`
//     cc.appendChild(h3)
//     // console.log(cc)

// }

// 