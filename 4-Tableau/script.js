// let tab[], déclaration du tableau
// tab[0]=5,----->
// tab[1]="a",---> ----->changer les informations dans un tableau
// tab[2]=true--->
// tab=[5,"a",true,[0,5]];--> incription des informations directement dans un tableau
/* pour parcourire un tableau -----> for(let i=0; i>tab.length;i++){
    console.log tab[i]
}
length---> pour quand on ne connait pas la taille du tableau
join--->pour tranformer le tableau en un texte 
ex: 
let tab=["j", "e","a","n"]
tab.join()=====>"jean"


and
pour le contraire nom=tab.slice()
*/

// parcourir un tableau

/*let tab=["5","e","4","a"];
for(let i=0; i<tab.length;i++){
    console.log(tab[i]) //afficher un tableau
}*/
//inverser
/*let tab=["5","e","4","a"]
for(let i=tab.length-1;i>=0;i--){
    console.log(tab[i]) //afficher un tableau
}*/

// trouver un element a une position dans un tableau 4
/*
let trouver=false
let tab=["5","e","4","a"]
for(let i=tab.length-1;i>=0;i--){
    if(tab[i]==4){
        trouver=true
    }
}
if(trouver){
    console.log("lément 4 se trouve dans le tableau")
}
else{
    console.log("lément 4 ne se troupe pas dans le tableau")
}
*/

//Vérifier si l'élement se trouve dans le tableau et a quel indice
/*let indice=-1
let tab=["5","e","4","a"]
for(let i=tab.length-1;i>=0;i--){
    if(tab[i]==4){
        indice=i
    }
}
if(indice>=0){
    console.log("lément 4 se trouve dans le tableau l'élement se trouve dans le tableau a l'indince " + indice)
    
}
else{
    console.log("lément 4 ne se troupe pas dans le tableau")
}
*/
// ou
/*let tab=["5","e","4","a"]
if(tab.indexOf("4")>=0){
    // console.log( "l'élement se trouve dans le tableau a l'indince " + tab.indexOf("4"))
}
console.log(tab.join("-"))
*/


/*let nom="Mohamed"

console.log(nom.split(""))*/

// Ajouter les élement a un tableau 
/*Ajouter a la fin

tab[tab.lenght]=l'élément a ajouter
tab




