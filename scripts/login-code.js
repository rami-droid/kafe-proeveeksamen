//DOM elementer 
const loginBtn = document.querySelector("#login")
const signupButton = document.querySelector("#signup")
const exitBtn = document.querySelector("button")

const usernameInput = document.querySelector("#username")
const passwordInput = document.querySelector("#password")

import { user } from "./classes.js";

function generateSessionID() {
    return Math.round(Date.now() * Math.random()*13)
}

console.log(generateSessionID())

loginBtn.addEventListener("click", () => {
    const newUser = new user(usernameInput.value, passwordInput.value)
    //leser user.json
    fetch('/users').then(res => res.json())
    .then(users => {
        //sjekk for at brukeren eksisterer
        const usernameExists = users.some(
            user => user.username === newUser.username || user.password === newUser.password
        )

        if (usernameExists) {
            //lagre session ID i localstorage
            const sessionId = generateSessionID();
            const userSession =  {
                sessionId: sessionId, 
                username: newUser.username,
                points: newUser.points, 
                loggedIn: true
            }
            localStorage.setItem('userSession', JSON.stringify(userSession));

            window.location.href = "userpage.html"
        } else {
            alert("ugyldig brukernavn eller passord.")
        }
    })
});

signupButton.addEventListener("click", () => {
    const newUser = new user(usernameInput.value, passwordInput.value)
    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.text())
    .then(msg =>{console.log(`${msg}, user; ${newUser.getProfile}`)}) //litt error handling og sånt
    .catch(err => {console.error(err)})
})

exitBtn.addEventListener("click", () => {
    window.history.back();
});