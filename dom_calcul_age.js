// Calcul automatique de l'âge selon l'année de naissance
function calculAge() {
    const anneeNaissance = document.getElementById("anneeNaissance").value;
    const ageAffichage = document.getElementById("ageResultat");

    if (anneeNaissance && !isNaN(anneeNaissance)) {
        const anneeCourante = new Date().getFullYear();
        const age = anneeCourante - parseInt(anneeNaissance);
        ageAffichage.textContent = age + " ans";
    } else {
        ageAffichage.textContent = "";
    }
}
