const user = JSON.parse(localStorage.getItem("userSession"));

const loginBtn = document.querySelector("#login-btn")
if (user) {
    loginBtn.innerText = "logg ut"
} else {
    loginBtn.innerText = "logg in"
}