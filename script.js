//Ici, je redige mon script JavaScript

//Types de variable : number, boolean, tableau, variable objet-->
//Console.log veut dire que le message va être afficher dans 
//inspecter dans la partie console. Je dois dabord déclarer mon variable
//Je declare ma variable nom qui contient le texte Madi-Soilihi
//Dans la console sur la page web, après "Bonjour, je m'appelle"
//sera écrit directement Bounou Ben Madi-Soilihi. Au lieu de "Bonjour, je m'appelle prenom nom"
// Quand il s'agit d'un chiffre, ne pas mettre d'appostrophe, ni de virgule. 
// A la place de la virgule, je met un point
// Les boolean permettent de stocker une information qui sera soit vraie, soit fausse.

let nom = "Madi-Soilihi";
        let prenom = "Bounou Ben";
        let age = 26 ;
        console.log("Bonjour, je m'appelle ", prenom, nom,"et j'ai", age,"ans",
        );
        let prix = 12;
        console.log("Prix de banane",prix)
        const nombreDécimal = 3.4123;
        console.log("Nombre décimal :",nombreDécimal);
        const nombreNegatif = -509; 
        console.log("Nombre négatif :", nombreNegatif);

        const nombreFraction = 1/3;
        console.log("Nombre fraction :", nombreFraction);
        let salutation = "Bonjour les gens";
        console.log(salutation);
        let greeting = 'Good morning';
        console.log(greeting)


        let andabu = `Kwezi`;
        console.log(andabu);
        let commune = "M'tsamboro";
        console.log(commune);
        let village = 'M\'tsahara';
        console.log(village);
        let vrai = true ;
        console.log(vrai);
        let est_faux = false ;
        console.log(est_faux);

        //Je declare mon variable tableau
        let eleves = ["Bounou Ben", "Oifikidine", "Malidi Mlimi", "Jassem", "Rachidi", "Yowane", "Naël", "Anrabia", 
        "Anzilati", "Ikram", "Shaïda", "Mounawara"];//tableau d'élève
        console.log(eleves);
        let diplome = [true, 10, "Bounou Ben"];
        console.log(eleves[0]);//je fais appelle le premier membre du tableau
        console.log(eleves[1]);//je fais appelle le deuxième membre du tableau
        console.log(eleves[2]);//je fais appelle le troisième membre du tableau

        //Je déclare mon variable objet (Les objets permettent de stocker des informations plus complexes qu’une simple liste.) 
        //(A l’intérieur d’un objet, il y a une ou plusieurs propriétés. Chaque propriété est associée à une valeur.)
        let client = {
            nom : "Bacar",
            village : "Choungui",
            age : 25,
            scores : [4, 7, 2]
        };

        console.log(client);//Je fais appelle à tout les informations du client
        console.log(client.age);//Je fais appelle à seulement l'âge du client
        console.log(client.nom);
        console.log(client.village);
        console.log(client.scores);
        console.log(client.scores[0]);//je recupère le score numéro 4
        console.log(client.scores[1]);
        console.log(client.scores[2]);

       let joueurProfessionnel = {
        nom : "Zinédine",//la propriété "nom" désigne le nom du joueur
        prenom : "Yazid Zidane",
        nationalite : ["Française", "Algérienne"],//Pour pouvoir faire appel des nationalité séparément
        dateNaissance : "23 juin 1972",
        taille : 1.85,
        piedFord : "droit",
        poste : "Milieu offensif",
       };
        
       
       //J'affiche l'ensemble de l'objet joueurProfessionnel
       console.log(joueurProfessionnel);

       //j'affiche le nom de l'objet joueurProfessionnel
       console.log(joueurProfessionnel.nom);

       //j'affiche le prenom de l'objet joueurProfessionnel
       console.log(joueurProfessionnel.prenom);

       //j'affiche la première nationalité de l'objet joueurProfessionnel
       console.log(joueurProfessionnel.nationalite[0]);

       //j'affiche la deuxième nationalité de l'objet joueurProfessionnel
       console.log(joueurProfessionnel.nationalite[1]);

       //j'affiche la date de naissance de l'objet joueurProfessionnel
       console.log(joueurProfessionnel.dateNaissance);

       //j'affiche la taille de l'objet joueurProfessionnel
       console.log(joueurProfessionnel.taille);

       //j'affiche du pied fort de l'objet joueurProfessionnel
       console.log(joueurProfessionnel.piedFort);

       //j'affiche du poste de l'objet joueurProfessionnel
       console.log(joueurProfessionnel.poste);
       


       let depute = {
        nom : "Estelle Youssoufa",
        nationalite : "Française",
        dateNaissance : "31 juille 1978",
        fonction : "Député",
        diplome : "IUT de Tours, Université de Québec",
        profession : "Journaliste",
        partiPolitique : "UDI",
       };

       console.log(depute.nom);
       console.log(depute.nationalite);
       console.log(depute.dateNaissance);
       console.log(depute.fonction);
       console.log(depute.diplome);
       console.log(depute.profession);
       console.log(depute.partiPolitique);
