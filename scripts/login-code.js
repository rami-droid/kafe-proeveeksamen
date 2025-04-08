const loginBtn = document.querySelector("#login")
const signupButton = document.querySelector("#signup")
const exitBtn = document.querySelector("button")

const usernameInput = document.querySelector("#username")
const passwordInput = document.querySelector("#password")

import { user } from "./classes.js";



loginBtn.addEventListener("click", () => {
    const newUser = new user(usernameInput.value, passwordInput.value)
    fetch('/users').then(res => res.json())
    .then(users => {
        const usernameExists = users.some(
            user => user.username === newUser.username || user.password === newUser.password
        )

        if (usernameExists) {
            newUser.loggedIn = true
        } else {
            console.log("bruker eksisterer ikke")
        }
    })
});

signupButton.addEventListener("click", () => {
    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.text())
    .then(msg =>{console.log(msg, + ", " + newUser)}) //litt error handling og sånt
    .catch(err => {console.error(err)})
})