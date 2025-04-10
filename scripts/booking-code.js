const user = JSON.parse(localStorage.getItem("userSession"));

if (user) {
    loginBtn.innerText = "logg ut"
} else {
    loginBtn.innerText = "logg in"
}