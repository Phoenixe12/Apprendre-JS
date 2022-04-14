// Déclation des array

let tab = [1, "bien", [1, 2], false, null];
let tab1 = [];

//Acceder aux élements du tableau
tab[0] = 7; //stocker un donnée
console.log(tab[1]); //Réccuperation de donnée
console.log("la taille du tableau est :" + tab.length);
console.log("le premier élement du tableau est: " + tab[0]);
console.log(" le dernier élement du tableau est: " + tab[tab.length - 1]);

//Destructuration d'un array
let tab2 = [22, "jean", 2023];
let [age, nom, annee] = tab2;
// A la fin: age=22 ; nom= "jean";année= 2023

//Parcour d'un  array

let tab3 = [1, " a", 5, "b", "lola"];

for (let i = 0; i < tab3.length; i++) {
  console.log(tab3[i]);
}
//Parcour d'un array au sens inverse
console.log("Parcour en sens inverse");
for (let i = tab3.length - 1; i >= 0; i--) {
  console.log(tab3[i]);
}

// METHODES DES ARRAYS ( manipulation )

// *Ajout, Suppression et Modifications
// --> A la fin
let tab4 = [4, [1, 2], "jojo", 7, " pio"];
tab4.push([8, 7]); // Ajout l'élement [8,7] a la fin de l'array
console.log(tab4);
tab4.pop(); //Suppression le dernier élement de l'array
console.log(tab4);

// --> Au début
tab4.unshift(128); // Ajout d'élement 128 au début
console.log(tab4);
tab4.shift(); // Supression du premier élement
console.log(tab4);

// --> A une position personnalisée
// -splice(start,qte,elems)
/* 
    -start : indice l'ou on veut commencer
    -qte : quantité d' élement a supprimer
    -elems : les élements a ajoutés (cela peut etre une seule ou, plusieurs séparée par des virgules)
*/
tab4.splice(1, 0, 9); // On ajoute 9  a l'indice 1
console.log(tab4);

tab4.splice(2, 2, 55, 3, 5); // On supprime les élements de position 2 et 3; et on ajoute 55 , 3 , 5 à partir de la position 2
console.log(tab4);

tab4.splice(2, 1); // il supprime l'élement a la position 2
console.log(tab4);

//Récuperation  d'une portion du tableau d'un tableau avec slice (start,end);
let tab5 = [4, [1, 2], "jojo", 7, " pio"];
//console.log(tab5.slice(2,3));
//Récuperation  d'une portion du tableau d'un tableau avec slice (start);
console.log(tab5.slice(2));
//fonction reverse pour retourner le tableau
console.log(tab5.reverse());
//trie un tableau par ordre alphabétique
console.log(tab5.sort());

//EXERCICE
let tab7 = ["B", "A", "F", "Z", "J", "G"];
console.log(tab7.sort().reverse());

let tab8 = [10, 35, 100, 44, 20, 35, 2];
console.log(tab8.sort((a, b) => a - b));
// EXERCICE
/*etant donné un tableau qui contient n+1 entiers, d'oú chaque
entier est compris dans [1,n]. Il y a un entier dans le tableau
qui se repete. Ecrire l'algo pour remplir le tableau et trouve l'entier repeter */
let tab9 = [];
let n = parseInt(Math.random() * 10);
if (n < 2) n = 4;
for (let i = 0; i < n; i++) {
  let a = parseInt(Math.random() * n) + 1;
  let j = 0;
  while (j < i && tab9[j] != a) {
    if (tab9[j] == a) {
      a = parseInt(Math.random() * n) + 1;
      j = 0;
    } else {
      j++;
    }
  }
  tab9[i] = a;
}
console.log(tab9);
