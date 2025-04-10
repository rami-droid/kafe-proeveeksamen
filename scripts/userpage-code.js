const user = JSON.parse(localStorage.getItem("userSession"));

const userHeader = document.querySelector("h1")
console.log(user)
const loginBtn = document.querySelector("#login-btn")


loginBtn.addEventListener("click", () => {
    console.log("clicked")
    if (!user) {
        window.location.href = "login.html";
    } else {

    }
})


if (!user) {
    window.location.href = "login.html";
} else {
    loginBtn.innerText = "logg ut"
    userHeader.innerText = `Velkommen, ${user.username}!`
}

const pointsSection = document.querySelector("#points-section")

