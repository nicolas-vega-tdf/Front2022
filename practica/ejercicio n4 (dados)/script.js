
let cantidadDe7=0;

let btnlanzar = document.getElementById("btnlanzar");
btnlanzar.addEventListener("click",lanzar);

function lanzar(){
    let dado1=0;
    let dado2=0;
    for(let i=0;i<1000;i++){
         dado1= Math.floor(Math.random()*(6 - 1 + 1)+1); 
         dado2= Math.floor(Math.random()*(6 - 1 + 1)+1); 
         if((dado1 + dado2) === 7){
            cantidadDe7 ++;
         }
    }
    document.getElementById("resultado").innerHTML = "El 7 salio " + cantidadDe7 + " veces"; 
    cantidadDe7=0;
}