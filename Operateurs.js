console.log("Ici, je code les opérateurs en JavaScript");

//Addition
let prixUnitaire = 13;
let valeurAjoutee = 7;
let valeurReduction = 5;
let valeurDivision = 4;

//Première technique d'addition dans un code HTML
let prixAdditionne1 = 3+7;
//J'affiche la valeur de la variable prixAdditionne1
console.log("prixAdditionne1 : ", prixAdditionne1);

//Deuxième méthode d'additionner des nombres à l'aide de variables
let prixAdditionne2 = prixUnitaire + valeurAjoutee;
//J'affiche le résultat du deuxième méthode de calcul
console.log("prixAdditionne2", prixAdditionne2);

//Addition des chaines de caractères
//Exemple : "Fatima" + "Amina" ; Résultat attendu est "Fatima Amina"
let eleve1 = "Fatima";
let eleve2 = "Amina";

/*Ici, je concatène les deux variables
Résultats attendu : "FatimaAmina"
*/
console.log(eleve1 + eleve2);

/*Je concatène les deux variables.
Je rajoute un espace entre les deux variables.
Résultat attendu : "Fatima Amina"
*/
console.log(eleve1 +" "+ eleve2);

/*
Je concatene deux variable.
Et je les stocke dans une aute variable.
*/
let eleveCombo = eleve1 + " " + eleve2;
console.log("Eleve Combo : ", eleveCombo);

// Soustraction

let prixReduit = prixUnitaire - valeurReduction;
console.log("Prix réduit : ", prixReduit);

//Multiplication

let prixMultiplie = prixUnitaire * valeurAjoutee;
console.log("Prix Multtiplié", prixMultiplie);

//Division
//le "/" permet de diviser des nombres
let prixDivise = prixUnitaire / valeurDivision;
console.log("Résultat du prix divisé : ", prixDivise);

/*
Les opérateurs de comparaison
Nous allons comparer les valeurs stocker dans les variables
*/

console.log("### Section de comparaison ###");
let village1 = "Mamoudzou";
let commune1 = "Mamoudzou";

/*
*Je vérifie que les deux variable ont la même valeur.
*Le == (double égal) permet de comparer l'égalité des valeurs
 */
console.log(village1 == commune1);

/*
Je verifie si les deux varibles ont :
*le même valeur
*le même type de valeur
*
*Le signe === (triple égal) permet de comparer les valeurs et le type de données.
Les types de données sont :
*-number (nombre)
*-string (chaine de caractères)
*-bollean (booléen) soit true ou false
*-array (tableau)
*-objet (objet)
*/
console.log(village1 === commune1);

/*
Signe > signifie : "supérieur à" ou bien "plus grand que"
*/
let age1 = 12;
let distanceParcourus = 5;

//Est-ce que l'âge est supérieur à la distance parcourus ?
console.log(age1 > distanceParcourus );

//Est-ce que l'âge est inférieur à la distance parcourus ?
console.log(age < distanceParcourus);

//Est-ce que l'âge est supérieur ou égal à la distance parcourus ?
console.log(age >= distanceParcourus);

//Est-ce que l'âge est inférieur ou égal à la distance parcourus ?
console.log(age <= distanceParcourus);

//Est-ce que le village est différent de la commune ?
console.log (village1 != commune1);

//Est-ce que le village est strictement différent de la commune ?
console.log (village1 !== commune1);
