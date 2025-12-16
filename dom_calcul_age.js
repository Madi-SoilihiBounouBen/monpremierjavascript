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

// Récupère l'élément HTML dont l'id est "boutonValider"
let elementBoutonValider = document.getElementById("boutonValider");
// Ajoute un écouteur d'événement sur cet élément
// L'événement écouté est le clic de la souris ("click")
//addEventListener est une méthode JavaScript qui permet de dire à un élément HTML :
//« Quand un événement se produit, exécute ce code »
elementBoutonValider.addEventListener("click", function(){
    // Affiche dans la console du navigateur le texte
    // "elementBoutonValider :" suivi de l'élément HTML lui-même
    console.log("elementBoutonValider :", elementBoutonValider);
    console.log(elementBoutonValider.clientHeight);

});

let elementInputNom = document.querySelector("#nom");//le # c'est pour indique l'élément séléctionné est id
    console.log(elementInputNom);
    console.log(document.head);
    console.log(document.title);

let elementDivRecensement = document.querySelector("#recensement");
    console.log(elementDivRecensement);

    let elementPRecensement = document.querySelector("#paragraphe1");
    console.log(elementPRecensement);

    //je récupère la liste des communes de Mayotte,
    //Puis, je stocke les communes dans la variable elementListCommunes
    let elementListCommunes = document.querySelector("#listCommunes");
    console.log(elementListCommunes);

    //J'utilise la boucle FOR pour parcourir la liste elementListCommunes
    for(let i = 0; i < elementListCommunes.length; i++) {
        console.log("### Liste Communes ###")
        console.log(elementListCommunes [i]);
    }

    //J'utilise QuerySelectorAll pour récupérer tous les membres de la même classe
    let elementListCommune = document.querySelectorAll(".commune");
    console.log(elementListCommune);

    for(let i = 0; i < elementListCommune.length; i++) {
        console.log (elementListCommune [i]);
    }

     for(let i = 0; i < elementListCommune.length; i++) {
        console.log (elementListCommune [i]);
        console.log (elementListCommune [i].textContent);

    }