// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQa4wFHgTPhoYuWpViTISRNwWyITxudqM",
    authDomain: "opplaering-148b7.firebaseapp.com",
    projectId: "opplaering-148b7",
    storageBucket: "opplaering-148b7.appspot.com",
    messagingSenderId: "708397871443",
    appId: "1:708397871443:web:49bfffb82dfa8ace5631a6"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Lager en referanse til databasen
let db = firebase.firestore();

let collectionName = "brukere"

// Henter elementer fra DOM
let hovedEl = document.querySelector("#hoved")
let fornavnEl = document.querySelector("#fornavn")
let etternavnEl = document.querySelector("#etternavn")
let epostEl = document.querySelector("#epost")

let registrerBtn = document.querySelector("#registrer")

// Legger til lytter på knappen
registrerBtn.addEventListener("click", addUser)

// Funksjon som legger bruker i database
function addUser() {
    /*
    console.log(fornavnEl.value)
    console.log(etternavnEl.value)
    console.log(epostEl.value)
    */

    db.collection(collectionName).add({
        fornavn: fornavnEl.value,
        etternavn: etternavnEl.value,
        epost: epostEl.value
    })

    console.log("Brukeren ble lagt inn databasen.")

    // Tømmer input feltene
    fornavnEl.value = ""
    etternavnEl.value = ""
    epostEl.value = ""

    // Oppdaterer brukerne
    getUsers()
}



function getUsers() {
    // Henter data. Når dataene er ferdig hentet, starter "then"-biten
    //db.collection(collectionName).get().then((snapshot) => {
    db.collection(collectionName).orderBy("etternavn").get().then((snapshot) => { // sorterer etter fornavn
        // Henter ut dokumentene
        let dokumenter = snapshot.docs

        // Skriver dokumentene til konsoll
        //console.log(dokumenter)

        // Tømmer diven
        hovedEl.innerHTML = ""

        // Viser innholdet i kolleksjonen til nettsiden
        for (let i = 0; i < dokumenter.length; i++) {
            let data = dokumenter[i].data()
            //console.log(data)

            // Henter id til dokumentet
            let id = dokumenter[i].id

            hovedEl.innerHTML += `<h2>Bruker ${i + 1}</h2>`

            hovedEl.innerHTML += `<p>Fornavn: ${data.fornavn}</p>`
            hovedEl.innerHTML += `<p>Etternavn: ${data.etternavn}</p>`
            hovedEl.innerHTML += `<p>E-post: ${data.epost}</p>`

            // Knapp som sletter brukeren
            hovedEl.innerHTML += `<button data-id="${id}" class="slett">Slett bruker</button>`
        }

        // Henter slett-knappene fra DOM 
        let slettBtn = document.querySelectorAll(".slett")
        //console.log(slettBtn)

        // Legger til lytter til hver slett-knapp
        for (let i = 0; i < slettBtn.length; i++) {
            slettBtn[i].addEventListener("click", deleteUser)
        }
    })
}

// Funskjon som sletter bruker fra databasen
function deleteUser(e) {
    // Henter data-id til det vi trykker på
    let id = e.target.getAttribute("data-id")
    console.log(id)

    // Sletter brukeren
    db.collection(collectionName).doc(id).delete().then(() => {
        console.log("Slettet bruker")
        location.reload()
    })

    // Laster inn nettsiden på nytt
    /*  setTimeout(() => {
        location.reload()
    }, 100) */
}

// Kaller funksjonen som henter brukerne fra databasen
getUsers()