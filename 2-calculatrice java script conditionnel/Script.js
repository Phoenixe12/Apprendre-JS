let operation=Number(prompt("Entrer un type nombre pour le choix de l'operation\n"+
"1-somme\n"+
"2-soustraction\n"+
"3-multiplication\n"+
"4-division"
))
if(operation>0 && operation<=4){
    let op1=Number(prompt("Entrer un premier nombre"))
    let op2=Number(prompt("Entrer un deuxieme nombre"))
    // console.log(operation)
    switch(operation){
        case 1:
            console.log("La somme de "+op1+" plus "+op2+" est: "+(op1+op2))
            break;
        case 2:
            console.log("La soustraction de "+op1+" plus "+op2+" est: "+(op1-op2))
            break;
        case 3:
            console.log("La multiplication de "+op1+" plus "+op2+" est: "+(op1*op2))
            break;
        case 4:
            console.log("La divison de "+op1+" plus "+op2+" est: "+(op1/op2))
            break;
        default : console.log("Le operation entrez n'exite pas")
        break;  
    }
}else{
    console.log("Le operation entrez n'exite pas");
}

