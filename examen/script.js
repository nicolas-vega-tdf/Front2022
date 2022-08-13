
let btnSuma = document.getElementById("btnSuma");
btnSuma.addEventListener("click",sumar);

let btnResta = document.getElementById("btnResta");
btnResta.addEventListener("click",restar);

let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");

btnSuma.classList.add("clase1");
btnResta.classList.add("clase2");

function sumar (){
    let suma = parseInt(numero1.value) + parseInt(numero2.value) ;
    document.querySelector("h2").innerHTML = "El resultado es: " + suma;
}

function restar (){
    let resta =  numero1.value - numero2.value ;
    document.querySelector("h2").innerHTML = "El resultado es: " + resta;
}