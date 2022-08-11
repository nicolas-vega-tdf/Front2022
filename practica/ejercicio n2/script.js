
let boton = document.getElementById("boton");
boton.addEventListener("click", mostrar);


function mostrar(){
    let numero=0;
    for(let i=0;i<100;i++){
        numero =Math.floor((Math.random()*(100 - 1 + 1))+1);
    }
    document.querySelector("h1").innerHTML = numero;
    numeritos=0;
}