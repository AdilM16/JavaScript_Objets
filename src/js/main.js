//Exo 1 
//Créez un objet avec vos valeurs
//'Nom', 'prenom', 'age', 'taille'
//Affichez votre age via un console.log()
// let moi = {
//     nom: "Mohamed",
//     prenom: "Adil",
//     age: 23,
//     taille: "193cm",
//     couleurObj : {
//         couleur1 : "bleu",
//         couleur2 : "noir",
//     },
//     couleursArr : ["jaune", "vert"],
//     bonjour(){
//         console.log(`bonjour ${this.prenom} ${this.nom}`);
//     }
// }

// console.log(moi); // je clg mon objet
// console.log(moi.prenom + " " + moi.nom); // je clg la propriété prenom et nom de mon objet moi
// console.log(moi.couleurObj.couleur2); // je clg la propriété couleur2 de mon objet couleurObj qui est dans mon objet moi
// console.log(moi.couleursArr[0]); // je clg le premier element de mon tableau 

// moi.bonjour();

//Exo 2 
//Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)
// let guts = {
//     nom: "Brsrk",
//     prenom: "Guts",
//     age: 20,
//     taille: "185cm",
// }
// console.log(obj.age);
// let griffith ={};
//Exo 3
//Remplir les propriétées du 3eme personnage
//Son nom doit valoir le nom du personnage1
//Son age doit valoir celui du personnage2
//Et sa taille doit être rempli avec la valeur que vous souhaitez
// griffith = {
//     nom : moi.nom,
//     prenom : guts.prenom,
//     age : moi.age,
// };
// console.log(griffith);

// Exo 1
// Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.

// let mikey = {
//     nom : "Manjiro",
//     prenom : "Sano",
//     age : "27",
//     taille : "172cm",
//     sePresenter() {
//         return (`${this.nom} ${this.prenom}`);
//     }
// }
// console.log(`Bonjour je m'appelle ${mikey.sePresenter()}`);


// Exo 2
// Créer un objet avec un nom et une méthode
// La méthode de votre objet lance un prompt permetant de changer son age
// Une alert renvoi "[objet] a [age de l'objet] ans"

// let draken ={
//     nom : "Ryuguji",
//     prenom : "Ken",
//     age : "",
//     quest(){
//         this.age = prompt(`Quel est l'age de ${this.nom} ${this.prenom} ?`);
//         alert(`${this.nom} ${this.prenom} a ${this.age} ans`);
//     }
// }
// draken.quest();