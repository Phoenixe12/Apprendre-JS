// let nombre=Number(prompt("Entrer un premier nombre"))
// for(let i=1;i<=12; i++){ document.write(nombre+" x "+i+" = "+(nombre*i)+"<br>") }
let tentative=1
let msg="Entrer un premier nombre ("+(8-tentative)+")";
let nombre;
let a=parseInt(Math.random()*100)
// console.log(a)

do{
    nombre=Number(prompt(msg))
    if(nombre>a){
        msg="dimunier un peu de quelque nombre ("+(7-tentative)+")";
    }
    else if(nombre<a){
     msg="augmenter un peu de quelque nombre ("+(7-tentative)+")"
    }
    else{
        alert("felicitation")
        break
    }
 tentative++
}while(nombre!=a && tentative<=7)
         
    