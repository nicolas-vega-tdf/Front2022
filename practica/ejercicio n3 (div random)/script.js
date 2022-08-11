let btnDiv = document.getElementById("btnDiv");
btnDiv.addEventListener("click", crearDiv);

let div = document.getElementById("div");

function crearDiv(){
    let divNuevo = document.createElement("div");
    divNuevo.innerHTML ="Div 1";
    
    let claseRandom = Math.floor((Math.random()*(5 - 1 + 1)) + 1);
    let clase = "clase"+claseRandom;
    divNuevo.classList.add(clase);
    div.appendChild(divNuevo);
    
}           

