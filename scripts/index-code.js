const redirBtn = document.querySelector(".primary")

const loginBtn = document.querySelector("#login-btn")


loginBtn.addEventListener("click", () => {
    console.log("clicked")
    window.location.href = "login.html"
})

redirBtn.addEventListener("click", () => {
    window.location.href = "menu.html"
})