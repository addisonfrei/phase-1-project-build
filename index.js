// Add forward and back buttons at the bottom to advance through searches

// CONST
const card = document.createElement('div')
const h3 = document.createElement('h3')
const ul = document.createElement('ul')
const li = document.createElement('li')
const p = document.createElement('p')
const catalog = document.querySelector('#brew-card')
const type = document.querySelector('#submit-type')
const state = document.querySelector('#submit-state')
const city = document.querySelector('#submit-city')
const brewName = document.querySelector('#submit-name')
const inputType = document.querySelector('#input-type')
const inputName = document.querySelector('#input-name')
const inputCity = document.querySelector('#input-city')
const inputState = document.querySelector('#input-state')

// FUNCTIONS
function addCard(items) {
    items.forEach(item => {
        const card = document.createElement('div')
        const h3 = document.createElement('h3')
        h3.style.color = '#ffffff'
        const ul = document.createElement('ul')
        const li = document.createElement('li')
        const a = document.createElement('a')
        const catalog = document.querySelector('#brew-card')
        card.classList.add('card')
        card.style.background ='#A7B1B7'
        catalog.appendChild(card)
        card.appendChild(h3)
        h3.innerText = item.name
        card.appendChild(ul)
        ul.appendChild(li)
        li.innerText = `Address: ${item.street} \n City: ${item.city} \n State: ${item.state} \n Zip: ${item.postal_code} \n Phone: ${item.phone}`
        a.setAttribute('href', `${item.website_url}`)
        a.textContent = `Link to ${item.name}`
        card.appendChild(a)
        h3.addEventListener('mouseover', e => {
            e.target.style.background = 'black ';
            setTimeout(() => {
                e.target.style.background = '#A7B1B7'
            }, 3000)
        }, false); 
    });
}
function ofAge() {
    alert('Must be 21 or older to view this site')
}
function getBrewery(type, value) {
    catalog.innerHTML = ''
    fetch(`https://api.openbrewerydb.org/breweries?by_${type}=${value}&per_page=25`)
    .then(response => response.json())
    .then(items => {
        addCard(items)
        }
    );
}

// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', ofAge)

brewName.addEventListener('click', e => {
    e.preventDefault()
    getBrewery('name', inputName.value)
    inputName.value = ''
})

city.addEventListener('click', e => {
    e.preventDefault()
    getBrewery('city', inputCity.value)
})

document.addEventListener('click', e => {
    if (e.target.tagName == 'path') {
        var content = e.target.dataset.name;
        console.log(content);
        catalog.innerHTML = ''  
        getBrewery('state', content)   
        }  
});

type.addEventListener('click', e => {
    e.preventDefault()
    console.log(inputType.value)
    let value = inputType.value.toLowerCase()
    catalog.innerHTML = ''
    fetch(`https://api.openbrewerydb.org/breweries?by_type=${value}&per_page=25`)
    .then(response => response.json())
    .then(items => {
        addCard(items)
    })
    .catch(() => alert('Error: This search term is not available.  Please use one of search terms listed.'))
    inputType.value = ''
})

document.querySelector('#submit-clear').addEventListener('click', e => {
    e.preventDefault()
    catalog.innerHTML = ''
})






