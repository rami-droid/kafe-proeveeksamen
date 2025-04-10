const user = JSON.parse(localStorage.getItem("userSession"));

const loginBtn = document.querySelector("#login-btn")
if (user) {
    loginBtn.innerText = "logg ut"
} else {
    loginBtn.innerText = "logg in"
}

//klikk event for login/logout knapp
loginBtn.addEventListener("click", () => {
    console.log("clicked")
    if (!user) {
        window.location.href = "login.html";
    } else {
        localStorage.removeItem("userSession")
        location.reload()
    }
})

//henter DOM elementer
const reservertions = user.reservations

const dateInput = document.querySelector("input")
const numInput = document.querySelector('input[type="number"]')

const submitBtn = document.querySelector(".secondary")

const reservationDisplay = document.querySelector("#reservation-display")

//tøm eksisterende innhold
reservationDisplay.innerHTML = ""

//vis eksisterende reservasjoner til bruker
user.reservations.forEach(reservation => {
    const date = new Date(reservation.date)
    const formattedDate = date.toLocaleDateString("no-NO", {day: "2-digit", month: "long"})

    //legger til en ny reservasjon i DIVen
    reservationDisplay.innerHTML += 
    `<div class="reservation-card">dato: <span class="reservation-card-date">${formattedDate}</span>
    <span class="reservation-card-people">${reservation.amnt} person</span></div>`
});

//klikk-event når bruker trykker på "reserver"
submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if(user) {
        //henter og formaterer input verdier
        const date = new Date(dateInput.value)
        const amnt = Number(numInput.value)

        //sjekk at begge feltene er fylt ut
        if(!dateInput.value || !numInput.value) {
            alert("Fyll ut alle felt.")
        }

        //legg til i brukerens data og oppdater i localStorage
        user.reservations.push({date: date, amnt})
        localStorage.setItem("userSession", JSON.stringify(user));
        console.log(user.reservations);

        //oppdater visningen
        const formattedDate = date.toLocaleDateString("no-NO", {
            day: "2-digit",
            month: "long"
        })
        reservationDisplay.innerHTML += 
        `<div class="reservation-card">
            dato: <span class="reservation-card-date">${formattedDate}</span>
            <span class="reservation-card-people">${amnt} person</span>
        </div>`
    }
})

