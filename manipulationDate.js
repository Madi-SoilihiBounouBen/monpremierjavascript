// Manipulation des dates en JavaScript
console.log("### Je suis dans l'événement date ###");

const maDate1 = new Date();

const anneeEnCours = new Date().getFullYear();

let elementSpanAnee = document.querySelector("#annee");
elementSpanAnee.textContent = anneeEnCours;

let elementSpanMois = document.querySelector("#mois");
elementSpanMois.textContent = maDate1.getMonth();

let dateComplet = document.getElementById("dateJour");
dateComplet.textContent = maDate1.toLocaleDateString();

let heureLocal = document.getElementById("heureLocal");
heureLocal.textContent = maDate1.toLocaleTimeString(); //le même code que la function, juste que ça ne s'anime pas

let heureTokyo = document.getElementById("heureParis");
heureTokyo.textContent = maDate1.toLocaleTimeString("fr-FR", {
  timeZone: "Europe/Paris",
 });//le même code que la function, juste que ça ne s'anime pas


function afficherHeures() {
  const maDate2 = new Date();

  //Heure Mayotte
  let heureLocal = document.getElementById("heureLocal");
  heureLocal.textContent = maDate2.toLocaleTimeString();

  //Heure Paris
  let heureParis = document.getElementById("heureParis");
  heureParis.textContent = maDate2.toLocaleTimeString("fr-FR", {
    timeZone: "Europe/Paris",
  });

  // Heure Tokyo
  const heureTokyo = document.getElementById("heureTokyo");
  heureTokyo.textContent = maDate2.toLocaleTimeString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  const heureMexique =document.getElementById("heureMexique");
  heureMexique.textContent = maDate2.toLocaleTimeString("es-MX", {
      timeZone: "America/Mexico_City",
    });

  const heureMontreal = document.getElementById("heureMontreal");
  heureMontreal.textContent = maDate2.toLocaleTimeString("fr-CA", {
      timeZone: "America/Toronto",
    });
}

// mise à jour chaque seconde
setInterval(afficherHeures, 1000);

// affichage immédiat au chargement
afficherHeures();
