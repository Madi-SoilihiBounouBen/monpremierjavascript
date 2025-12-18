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

//mon événement "keydown"
/**
 * Je code un événement de type KEYDOWN.
 * l'événement KEYDOWN va se déclancher lorsque j'appuie sur une touche de mon clavier
 */
//1. tout d'abord, je récupère l'événement HTML qui sera asssocié à l'événement KEYDOWN
let elementBoutonFleche = document.querySelector("#boutonFleche");

//2.j'associe l'événement KEYDOWN mon élément HTML en utilisant la méthode addEventLister(). 
// A l'interieur de la méthode eAddEventLister(), je passe une fonction fléchée comme suit '() => {}'.
elementBoutonFleche.addEventListener("keydown", (event) => {
    console.log("=== Je suis dans l'événement KEYDOWN ===");
    console.log("Clé event : ", event.key);
});

//mon événement "CHANGE"
/**
 * Je code un événement de type CHANGE.
 * l'événement CHANGE va se déclancher lorsque j'appuie sur une touche de mon clavier.
 */
// 1. tout d'abord, je récupère l'élément HTML qui sera associé l'événement CHANGE.
let elementInputNomForm = document.querySelector("#nom");

//2.j'associe l'événement CHANGE mon élément HTML en utilisant la méthode addEventLister(). 
// A l'interieur de la méthode eAddEventLister(), je passe une fonction fléchée comme suit '() => {}'.
//la fonction fléchée prend le paramètre event.
let messageSolution;//je déclare une variable vide.
let elementNomUtilisateur = document.querySelector("#nomUtilisateur");
elementInputNomForm.addEventListener("change", (event) => {
    console.log(event.target.value);
    messageSolution = `Bonjour ${event.target.value}`;
    elementNomUtilisateur.textContent = messageSolution;
});

/**
 * Envoyer le formulaire
 * Je vais récupérer les données saisies sur le formulaire
 * - nom
 * - prénom
 * - situation
 * - année de naissance
 */

//Je récupère la balise <form> </form> avec ses enfants. Ensuite, je stocke la balise dans la variable elementForm.
let elementForm = document.querySelector('form');
console.log("elementForm : ", elementForm);

//J'associe l'événement "submit"
elementForm.addEventListener("submit", (event) => {
    event.preventDefault(); // empêche le rechargement

    console.log("### Je suis dans l'événement submit du formulaire ###");

    // Récupération des données
    const nom = document.querySelector("#nom").value;
    const prenom = document.querySelector("#prenom").value;
    const age = document.querySelector("#ageResultat").value;
    const situation = document.querySelector("#situation").value;
    const anneeNaissance = document.querySelector("#anneeNaissance").value;

    console.log("Nom :", nom);
    console.log("Prénom :", prenom);
    console.log("Âge : ", ageResultat);
    console.log("Situation : ", situation);
    console.log("Année de naissance : ", anneeNaissance);
});

