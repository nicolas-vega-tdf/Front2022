 "use stric" 

 let numeritos = 0;

let boton = document.getElementById("boton");
boton.addEventListener("click", mostrar);


function mostrar(){
    
    for(let i=0;i<100;i++){
        numeritos =Math.floor((Math.random))
    }
    document.querySelector("h1").innerHTML = numeritos;
}