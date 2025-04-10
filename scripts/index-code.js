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





//Logger inn og ut avhenging av innloggingstatus
loginBtn.addEventListener("click", () => {
    console.log("clicked")
    if (!user) {
        window.location.href = "login.html";
    } else {
        localStorage.removeItem("userSession")
        location.reload()
    }
})

//går til meny siden
redirBtn.addEventListener("click", () => {
    window.location.href = "menu.html"
})

//går til login eller reservering siden avhengig av innloggingstatus.
loginSecondary.addEventListener("click", () => {
    if (!user) {
        window.location.href = "login.html"
    } else {
        window.location.href = "contact.html"
    }
})