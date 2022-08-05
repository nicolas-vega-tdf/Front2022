

let boton = document.getElementById("boton");
boton.addEventListener("click", mostrar);


function mostrar(){
    let numeritos = 0;
    for(let i=0;i<100;i++){
        numeritos++
    }
    document.querySelector("h1").innerHTML = numeritos;
}