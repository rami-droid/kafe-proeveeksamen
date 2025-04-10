// Håndterer henting og visning av menydata og interaksjon med filter-knapper.

const user = JSON.parse(localStorage.getItem("userSession"));

const loginBtn = document.querySelector("#login-btn")
if (user) {
    loginBtn.innerText = "logg ut"
} else {
    loginBtn.innerText = "logg in"
}




loginBtn.addEventListener("click", () => {
    console.log("clicked")
    window.location.href = "login.html"
})

//henter meny data og viser fram tingene
fetch('/menu')
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
    return response.json();
    })
    .then (data => {
        const menuItems = data
        console.log(menuItems)
        init(data)
        setupEventListeners(data)
    })
    .catch(error => {
        console.error("there was a problem fetching:", error)
    }) 


//setter opp event listeners for filter knappene for å vise produkter på klikk
function setupEventListeners(items) {

    //viser kun kaffe
    radio1.addEventListener("click", ()=>{
        console.log("clicked on " + radio1.id)
        const coffeeArrays = items.menu.coffee
        updateDisplay(coffeeArrays)
    })
    
    //viser kun latte
    radio2.addEventListener("click", ()=>{
        console.log("clicked on " + radio2.id)
        const coffeeArrays = items.menu.lattes
        updateDisplay(coffeeArrays)
    })

    //viser kun bakverk
    radio3.addEventListener("click", ()=>{
        console.log("clicked on " + radio3.id) 
        const coffeeArrays = items.menu.pastries
        updateDisplay(coffeeArrays)
    })

    //viser alt
    radio4.addEventListener("click", ()=> {
        init(items)
    })
}

const radio1 = document.querySelector("#coffee");

const radio2 = document.querySelector("#lattes")

const radio3 = document.querySelector("#pastries")
const radio4 = document.querySelector("#all")
const menuDisplay = document.querySelector("#menu-display") 

//oppdaterer menyvisningen basert på valgt filter
function updateDisplay(items) {
    menuDisplay.innerHTML = ""
    items.forEach(item => {
        console.log(item)
        const itemCard = document.createElement("div")
        itemCard.className = "item-card"
        itemCard.innerHTML = `
                        <img src="${item.image}" alt="${item.name}">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <p>${item.price_nok}NOK</p>
        `
        console.log(itemCard)
        menuDisplay.appendChild(itemCard)
    });
}

//samme som updateDisplay() men uten å resette vinduet
function updateInit(items) {
    items.forEach(item => {
        console.log(item)
        const itemCard = document.createElement("div")
        itemCard.className = "item-card"
        itemCard.innerHTML = `
                        <img src="${item.image}" alt="${item.name}">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <p>${item.price_nok}NOK</p>
        `
        console.log(itemCard)
        menuDisplay.appendChild(itemCard)
    });
}

//startfunksjon som laster alle produkter
function init(items) {
    menuDisplay.innerHTML = ""
    updateInit(items.menu.lattes);
    updateInit(items.menu.coffee);
    updateInit(items.menu.pastries);
}