let cap=document.getElementById("capt")
let menu=document.getElementById("aside")
let affiche=false
cap.addEventListener("click",function (){
    if(affiche==false){
        menu.style.display="block"
        affiche=true
    }
    
})