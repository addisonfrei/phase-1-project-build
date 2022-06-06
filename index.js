// Consts
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


fetch('https://api.openbrewerydb.org/breweries')
.then(response => response.json())
.then(item => {
    for(item of item) {
        const card = document.createElement('div')
        const h3 = document.createElement('h3')
        const ul = document.createElement('ul')
        const li = document.createElement('li')
        const p = document.createElement('p')
        const catalog = document.querySelector('#brew-card')
        card.classList.add('card')
        catalog.appendChild(card)
        card.appendChild(h3)
        h3.innerText = item.name
        card.appendChild(ul)
        ul.appendChild(li)
        li.innerText = `Address: ${item.street} \n City: ${item.city} \n State: ${item.state} \n Zip: ${item.postal_code} \n Phone: ${item.phone}`
        card.appendChild(p)
        p.innerText = `URL: ${item.website_url}`
    }
   
   
    // Add forward and back buttons at the bottom to advance through searches
})

type.addEventListener('click', e => {
    e.preventDefault()
    console.log(inputType.value)
    catalog.innerHTML = ''
    fetch(`https://api.openbrewerydb.org/breweries?by_type=${inputType.value}&per_page=25`)
    .then(response => response.json())
    .then(item => {
        for(item of item) {
            const card = document.createElement('div')
            const h3 = document.createElement('h3')
            const ul = document.createElement('ul')
            const li = document.createElement('li')
            const p = document.createElement('p')
            const catalog = document.querySelector('#brew-card')
            card.classList.add('card')
            catalog.appendChild(card)
            card.appendChild(h3)
            h3.innerText = item.name
            card.appendChild(ul)
            ul.appendChild(li)
            li.innerText = `Address: ${item.street} \n City: ${item.city} \n State: ${item.state} \n Zip: ${item.postal_code} \n Phone: ${item.phone}`
            card.appendChild(p)
            p.innerText = `URL: ${item.website_url}`
    }
});
inputType.value = ''
})

state.addEventListener('click', e => {
    e.preventDefault()
    console.log(inputState.value)
    catalog.innerHTML = ''
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${inputState.value}&per_page=25`)
    .then(response => response.json())
    .then(item => {
        for(item of item) {
            const card = document.createElement('div')
            const h3 = document.createElement('h3')
            const ul = document.createElement('ul')
            const li = document.createElement('li')
            const p = document.createElement('p')
            const catalog = document.querySelector('#brew-card')
            card.classList.add('card')
            catalog.appendChild(card)
            card.appendChild(h3)
            h3.innerText = item.name
            card.appendChild(ul)
            ul.appendChild(li)
            li.innerText = `Address: ${item.street} \n City: ${item.city} \n State: ${item.state} \n Zip: ${item.postal_code} \n Phone: ${item.phone}`
            card.appendChild(p)
            p.innerText = `URL: ${item.website_url}`
    }
});
inputState.value = ''
})

city.addEventListener('click', e => {
    e.preventDefault()
    console.log(inputCity.value)
    catalog.innerHTML = ''
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${inputCity.value}&per_page=25`)
    .then(response => response.json())
    .then(item => {
        for(item of item) {
            const card = document.createElement('div')
            const h3 = document.createElement('h3')
            const ul = document.createElement('ul')
            const li = document.createElement('li')
            const p = document.createElement('p')
            const catalog = document.querySelector('#brew-card')
            card.classList.add('card')
            catalog.appendChild(card)
            card.appendChild(h3)
            h3.innerText = item.name
            card.appendChild(ul)
            ul.appendChild(li)
            li.innerText = `Address: ${item.street} \n City: ${item.city} \n State: ${item.state} \n Zip: ${item.postal_code} \n Phone: ${item.phone}`
            card.appendChild(p)
            p.innerText = `URL: ${item.website_url}`
    }
});
inputCity.value = ''
})

brewName.addEventListener('click', e => {
    e.preventDefault()
    console.log(inputName.value)
    catalog.innerHTML = ''
    fetch(`https://api.openbrewerydb.org/breweries?by_name=${inputName.value}&per_page=3`)
    .then(response => response.json())
    .then(item => {
        for(item of item) {
            const card = document.createElement('div')
            const h3 = document.createElement('h3')
            const ul = document.createElement('ul')
            const li = document.createElement('li')
            const p = document.createElement('p')
            const catalog = document.querySelector('#brew-card')
            card.classList.add('card')
            catalog.appendChild(card)
            card.appendChild(h3)
            h3.innerText = item.name
            card.appendChild(ul)
            ul.appendChild(li)
            li.innerText = `Address: ${item.street} \n City: ${item.city} \n State: ${item.state} \n Zip: ${item.postal_code} \n Phone: ${item.phone}`
            card.appendChild(p)
            p.innerText = `URL: ${item.website_url}`
    }
});
inputName.value = ''
})