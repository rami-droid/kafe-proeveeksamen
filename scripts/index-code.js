const redirBtn = document.querySelector(".primary")

const loginBtn = document.querySelector("#login-btn")



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