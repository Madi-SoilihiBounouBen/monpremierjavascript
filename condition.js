//Les conditions en JavaScript
let nombreFruit = 19;

/*J'affiche l'alerte SI le nombre de fruit est égal à 18*/
/*
Ma condition commence par le mot-clé IF
La syntaxe à respecter est :
if(ma condition) {
    Action à exécuter
}
*/
if (nombreFruit == 18){//nous avons une comparaison égalité stricte
    alert("Vous avez atteint 18 fruits.");//fonction alert()
};

let noteEleve = 10;

if (noteEleve >= 10){
    alert("Vous êtes admis avec une note de " + noteEleve);
};

let ageTelespectateur = 18;
if (ageTelespectateur >= 18){//si l'âge est supérieur à 18, alors la commande va s'exécuter
    alert("Vous avez de 18 ans, vous pouvez regarder Rambo");
};


if(ageTelespectateur < 18){//si l'âge est inférieur à 18 alors l'alerte va s'afficher
    alert("Vous avez moin de 18 ans, vous pouvez regarder le roi lion");
};

//La condition avec IF ELSE
let pointPermis = 12;
if (pointPermis == 12){
    alert("Vous avez un bonus!");
} else{
    alert("Vous avez un malus!");
};