// Manipulation des dates en JavaScript
console.log("### Je suis dans l'événement date ###");

const maDate2 = new Date();

const anneeEnCours = new Date().getFullYear();

let elementSpanAnee = document.querySelector("#annee");
elementSpanAnee.textContent = anneeEnCours;

let elementSpanMois = document.querySelector("#mois");
elementSpanMois.textContent = maDate2.getMonth();

let dateComplet = document.getElementById("dateJour");
dateComplet.textContent = maDate2.toLocaleDateString();

let heureLocal = document.getElementById("heureLocal");
heureLocal.textContent = maDate2.toLocaleTimeString();

let heureTokyo = document.getElementById("heureParis");
heureTokyo.textContent = maDate2.toLocaleTimeString("fr-FR", {
  timeZone: "Europe/Paris",
 });


