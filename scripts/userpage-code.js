const user = JSON.parse(localStorage.getItem("userSession"));

const userHeader = document.querySelector("h1")
const loginBtn = document.querySelector("#login-btn")
const pointsSection = document.querySelector("#points-section")

const pointsRender = document.querySelector("#points-render")

const pointsProgress = document.querySelector("#points-progress")

console.log(user)



loginBtn.addEventListener("click", () => {
    console.log("clicked")
    if (!user) {
        window.location.href = "login.html";
    } else {
        localStorage.removeItem("userSession")
        location.reload()
    }
})

//endrer bare siden om brukeren er logget inn, redirect ellers
if (!user) {
    window.location.href = "login.html";
} else {
    let displayPoints = user.points

    while (displayPoints >= 1000) {
        displayPoints -= 1000
    }

    loginBtn.innerText = "logg ut"
    userHeader.innerText = `Velkommen, ${user.username}!`

    pointsRender.children[1].innerText = user.points

    pointsProgress.children[1].innerText = `${user.points}/1000`
    pointsProgress.children[2].value = displayPoints
}



