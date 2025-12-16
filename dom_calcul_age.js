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

    /**
     * J'insère des balises dans le fichier HTMl grâce au code JavaScript
     */
    //Je crée un élément (balise) nommé <section>
    let elementSection = document.createElement("section");

    //Je récupère la balise <body>, puis je stocke <body> dans la variable elementBody.
    let elementBody = document.querySelector('body');

    //J'ajoute la <section> dans le <body>
    elementBody.appendChild(elementSection);

    //Je crée un <h3>
    let nouveauTitre = document.createElement("h3");

    //J'ajoute du texte au <h3>
    nouveauTitre.textContent= "Mon titre de la section";

    //J'ajoute le <h3> dans la <section>
    elementSection.appendChild(nouveauTitre);

    //Je crée un élément (balise) nommé <maman>
    let elementMaman = document.createElement('maman');

    //J'ajoute la <maman> dans le <body>
    elementBody.appendChild(elementMaman);

     //Je crée un <h3>
    let nouveauTitre2 = document.createElement("h3");

    //J'ajoute du texte au <h3>
    nouveauTitre2.textContent= "Bonjour, maman !";

     //J'ajoute le <h3> dans la <section>
    elementMaman.appendChild(nouveauTitre2);

    //J'ajoute une image

    // Je crée un élément (balise) nommé <img>
let elementImage = document.createElement('img');

// J'ajoute la balise <img> dans le <body>
document.body.appendChild(elementImage);

// Je crée une balise <img>
let image = document.createElement("img");

// Je définis la source de l’image
image.src ="lilithu.png";

// Texte alternatif (important)
image.alt = "lilithu";
//possibilité "elementImage.setAttribute("alt", "lilithu" );"

document.body.appendChild(image);

elementImage.className = "lilithu";
elementImage.classList.add("image", "image3");

//supprimer une classe de l'élément img
elementBody.appendChild(elementImage);


