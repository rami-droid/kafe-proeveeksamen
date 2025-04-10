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
    //leser user.json
    fetch('/users').then(res => res.json())
    .then(users => {
        //sjekk for at brukeren eksisterer
        const matchedUser = users.find(
            user => user.username === usernameInput.value && user.password === passwordInput.value
        )

        if (matchedUser) {
            //lagre session ID i localstorage
            const sessionId = generateSessionID();
            const userSession =  {
                sessionId: sessionId, 
                username: matchedUser.username,
                points: matchedUser.points, 
                loggedIn: true,
                reservations: matchedUser.reservations
            }
            localStorage.setItem('userSession', JSON.stringify(userSession));

            window.location.href = "userpage.html"
        } else {
            alert("ugyldig brukernavn eller passord.")
        }
    })
});

signupButton.addEventListener("click", () => {
    const newUser = new user(usernameInput.value, passwordInput.value);

    //hente eksisterende brukere
    fetch('/users')
        .then(res => res.json())
        .then(users => {
            const userExists = users.some(user => user.username === usernameInput.value);

            if (userExists) {
                alert(`brukernavnet "${newUser.username}" er allerede tatt.`)
            } else {
                // om brukernavnet er ikke tatt, lag brukeren
                fetch('/users', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                .then(res => res.text())
                .then(msg => {
                    console.log(`${msg}, user: ${newUser.getProfile()}`)
                })
                .catch(err => {
                    console.error(err)
                });
            }
        })
        .catch(err => {
            console.error("Error fetching users:", err);
        });
});

exitBtn.addEventListener("click", () => {
    window.history.back();
});