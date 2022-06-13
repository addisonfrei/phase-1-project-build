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
let page = 1


// FUNCTIONS
function addCard(item) {
    for(item of item) {
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
        
    }
    const prevButton = document.createElement('button')
    catalog.appendChild(prevButton)
    prevButton.textContent = 'Previous'
    prevButton.id = 'previous'
    const nextButton = document.createElement('button')
    catalog.appendChild(nextButton)
    nextButton.textContent = 'Next'
    nextButton.id = 'next'
    nextButton.addEventListener('click', e => {
        console.log(e)
    })
    prevButton.addEventListener('click', e => {
        console.log(e)
    })
}
function ofAge() {
    alert('Must be 21 or older to view this site')
}


// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', ofAge)

brewName.addEventListener('click', e => {
    e.preventDefault()
    console.log(inputName.value)
    catalog.innerHTML = ''
    fetch(`https://api.openbrewerydb.org/breweries?by_name=${inputName.value}&per_page=25`)
    .then(response => response.json())
    .then(item => {
        addCard(item)
        }
    );
    inputName.value = ''
})

city.addEventListener('click', e => {
    e.preventDefault()
    console.log('city:', inputCity.value)
    catalog.innerHTML = ''
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${inputCity.value}&per_page=25`)
    .then(response => response.json())
    .then(item => {
        addCard(item)
    });
    inputCity.value = ''
})

// state.addEventListener('click', e => {
//     e.preventDefault()
//     console.log(inputState.value)
//     catalog.innerHTML = ''
//     fetch(`https://api.openbrewerydb.org/breweries?by_state=${inputState.value}&per_page=25`)
//     .then(response => response.json())
//     .then(item => {
//         addCard(item)
//     });
//     inputState.value = ''
// })

type.addEventListener('click', e => {
    e.preventDefault()
    console.log(inputType.value)
    let value = inputType.value.toLowerCase()
    catalog.innerHTML = ''
    fetch(`https://api.openbrewerydb.org/breweries?by_type=${value}&per_page=25`)
    .then(response => response.json())
    .then(item => {
        addCard(item)
    })
    .catch(() => alert('Error: This search term is not available.  Please use one of search terms listed.'))
    inputType.value = ''
})

document.querySelector('#submit-clear').addEventListener('click', e => {
    e.preventDefault()
    catalog.innerHTML = ''
})


document.addEventListener('click', function (e) {
    if (e.target.tagName == 'path') {
        var content = e.target.dataset.name;
        console.log(content);
        e.preventDefault()
        catalog.innerHTML = ''     
        fetch(`https://api.openbrewerydb.org/breweries?by_state=${content}&per_page=25`)
        .then(response => response.json())
        .then(item => {
        addCard(item)
        });
        }
});








