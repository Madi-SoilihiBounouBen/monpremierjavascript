//**Je programme les événements qui sont déclanchés du côté HTML */

// On sélectionne le bouton ayant l'id "validerDate" dans le HTML
const elementBoutonValiderDate = document.querySelector("#validerDate");

//Je déclare un objet date en utilisant la classe Date()
const maDate = new Date();

// On sélectionne le span qui affichera la date du jour
let elementSpanDateDuJour = document.querySelector("#dateDuJour");
let elementSpanDateDuJourForamat2 = document.querySelector("#dateDuJourFormat2")

elementBoutonValiderDate.addEventListener("click", function () {
    console.log("### Je suis dans le bouton valider date. ###");
    elementSpanDateDuJour.innerHTML = maDate;
    elementSpanDateDuJourForamat2.textContent = maDate.toDateString();
});

// événement KEYDOWN
let elementBoutonFleche = document.querySelector("#boutonFleche");

elementBoutonFleche.addEventListener("keydown", (event) => {
    console.log("=== Je suis dans l'événement KEYDOWN ===");
    console.log("Clé event : ", event.key);
});

// événement CHANGE
let elementInputNomForm = document.querySelector("#nom");
let messageSolution;
let elementNomUtilisateur = document.querySelector("#nomUtilisateur");

elementInputNomForm.addEventListener("change", (event) => {
    console.log(event.target.value);
    messageSolution = `Bonjour ${event.target.value}`;
    elementNomUtilisateur.textContent = messageSolution;
});

// formulaire
let elementForm = document.querySelector('form');
console.log("elementForm : ", elementForm);

elementForm.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("### Je suis dans l'événement submit du formulaire ###");

    const nom = document.querySelector("#nom").value;
    const prenom = document.querySelector("#prenom").value;
    const age = document.querySelector("#ageResultat").textContent;
    const situation = document.querySelector("#situation").value;
    const anneeNaissance = document.querySelector("#anneeNaissance").value;

    console.log("Nom :", nom);
    console.log("Prénom :", prenom);
    console.log("Âge :", age);
    console.log("Situation :", situation);
    console.log("Année de naissance :", anneeNaissance);
});

/*AJOUT UNIQUEMENT : PARTIE QUI CONCERNE LE SPAN */

function calculAge() {
    const nom = document.querySelector("#nom").value;
    const anneeNaissance = document.querySelector("#anneeNaissance").value;
    const spanAge = document.querySelector("#ageResultat");

    if (nom !== "" && anneeNaissance !== "") {
        const anneeActuelle = new Date().getFullYear();
        const age = anneeActuelle - anneeNaissance;

        spanAge.textContent = `vous êtes âgé de ${age} ans`;
    }
}

