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
        setupEventListeners(data)
    })
    .catch(error => {
        console.error("there was a problem fetching:", error)
    }) 


function setupEventListeners(items) {
    radio1.addEventListener("click", ()=>{
        console.log("clicked on " + radio1.id)
        const coffeeArrays = items.menu.coffee
        updateDisplay(coffeeArrays)
    })
    
    radio2.addEventListener("click", ()=>{
        console.log("clicked on " + radio2.id)
        const coffeeArrays = items.menu.lattes
        updateDisplay(coffeeArrays)
    })

    radio3.addEventListener("click", ()=>{
        console.log("clicked on " + radio3.id) 
        const coffeeArrays = items.menu.pastries
        updateDisplay(coffeeArrays)
    })
}

const radio1 = document.querySelector("#coffee");

const radio2 = document.querySelector("#lattes")

const radio3 = document.querySelector("#pastries")
const menuDisplay = document.querySelector("#menu-display") 

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