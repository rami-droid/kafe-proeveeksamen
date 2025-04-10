const user = JSON.parse(localStorage.getItem("userSession"));

const loginBtn = document.querySelector("#login-btn")
const redirBtn = document.querySelector(".primary")
const loginSecondary = document.querySelector(".secondary")

if (user) {
    loginBtn.innerText = "logg ut"
    loginSecondary.innerHTML = `<strong>reserver et bord</strong>`
} else {
    loginBtn.innerText = "logg in"
}





//login knapp funksjon
loginBtn.addEventListener("click", () => {
    console.log("clicked")
    if (!user) {
        window.location.href = "login.html";
    } else {
        localStorage.removeItem("userSession")
        location.reload()
    }
})

redirBtn.addEventListener("click", () => {
    window.location.href = "menu.html"
})

loginSecondary.addEventListener("click", () => {
    if (!user) {
        window.location.href = "login.html"
    } else {
        window.location.href = "contact.html"
    }
})