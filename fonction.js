/**
 * ### Les fonctions en JavaScript ###
 */

console.log ("### Section fonction ###");

/**
 * La fonction additionner () doit additionner des nombres
 * et retourner les résultats  de l'addition
 * La fonction additionner a besoin de deux paramètres : chiffre1 et chiffre 2;
 * ensuite, la fonction additionner additionne les deux paramètres : chiffre1 + chiffre2
 * Enfin, la fonction additionner retourne ou renvoie le résultat du calcul
 */
function additionner(chiffre1, chiffre2){
    let resultat = chiffre1 + chiffre2;
    return resultat;
}

//J'utilise la fonction additionner (chiffre1, chiffre2) pour calculer la somme de deux nombres

let sommes = 15 + 8;//Ancien méthode de calcul qui ne se fait plus depuis l'arrivé des fonctions

let sommesAddition = additionner(15, 8);
console.log("Somme : ", sommesAddition);


/**
 * La fonction soustraction() doit soustraire deux nombres
 * et retourner le résultat de la soustraction.
 * Elle a besoin de deux paramètres : chiffre1 et chiffre2 ;
 * ensuite, elle calcule la différence : chiffre1 - chiffre2 ;
 * enfin, la fonction retourne le résultat obtenu.
 */
function soustraction(chiffre1, chiffre2){
    let resultat = chiffre1 - chiffre2;
    return resultat;
};

let resteSoustraction = soustraction(15, 8);
console.log("Reste : ", resteSoustraction);

/**
 * La fonction multiplication() doit multiplier deux nombres
 * et retourner le résultat de la multiplication.
 * Elle prend deux paramètres : chiffre1 et chiffre2 ;
 * ensuite, elle effectue l’opération : chiffre1 * chiffre2 ;
 * enfin, la fonction renvoie le résultat du calcul.
 */
//Fonction multiplication pour multiplier deux nombres
function multiplication(chiffre1, chiffre2){
    let resultat = chiffre1 * chiffre2;//la formule de l'opération
    return resultat;
}

let produitMultiplication = multiplication(15, 8);//les chiffres à multiplier
console.log("Produit : ", produitMultiplication);//affiche sur la partie console le résultat

