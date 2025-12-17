//**Je programme les événements qui sont déclanchés du côté HTML */

// On sélectionne le bouton ayant l'id "validerDate" dans le HTML
const elementBoutonValiderDate = document.querySelector("#validerDate");

//Je déclare un objet date en utilisant la classe Date()
const maDate = new Date();

// On sélectionne le span qui affichera la date du jour
let elementSpanDateDuJour = document.querySelector("#dateDuJour");

let elementSpanDateDuJourForamat2 = document.querySelector("#dateDuJourFormat2")

// On ajoute un écouteur d'événement sur le bouton
// Le code à l'intérieur sera exécuté lors d'un clic
elementBoutonValiderDate.addEventListener("click", function () {

    // Message affiché dans la console pour vérifier que le clic fonctionne
    console.log("### Je suis dans le bouton valider date. ###");

    // On insère la date et l'heure actuelles dans le span
    // Date() retourne une chaîne de caractères contenant la date du jour
    elementSpanDateDuJour.innerHTML = maDate;

    elementSpanDateDuJourForamat2.textContent = maDate.toDateString();
});
