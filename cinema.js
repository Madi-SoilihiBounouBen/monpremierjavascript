/*### Ticket cinéma ###*/

// Objet ticket
let ticket = {
    nomFilm: "Commando",
    prix: 12,
    numeroSalle: 25
};

// Affichages du ticket
console.log(ticket);                 // Affiche toutes les informations du ticket
console.log(ticket.nomFilm);         // Affiche seulement le nom du film
console.log(ticket.prix);            // Affiche le prix
console.log(ticket.numeroSalle);     // Affiche le numéro de salle

// Objet nomClient
let nomClient = {
    nom: "MadiSoilihi",
    prenom: "BounouBen"
};

// Affichages du client
console.log(nomClient);              // Affiche toutes les infos du client
console.log(nomClient.nom);          // Affiche le nom
console.log(nomClient.prenom);       // Affiche le prénom

//Création du message d'affichage
let texteAffichage = `Bonjour ${nomClient.nom}, votre film ${ticket.nomFilm} est en salle ${ticket.numeroSalle}.`;

//Vérification avec console.log
console.log(texteAffichage);