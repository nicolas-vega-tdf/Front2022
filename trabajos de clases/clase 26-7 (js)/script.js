let contador = 0;

let contar = document.getElementById("contar");
contar.addEventListener("click",contar1);

let mostrar1 = document.getElementById("mostrar");
mostrar1.addEventListener("click",mostarPantalla);

function contar1(){
    contador++
    console.log(contador);
}

function mostarPantalla(){
    alert(contador);
}

let datos = document.getElementById("datos");
datos.addEventListener("input", mostrar);

function mostrar(){
    console.log(datos.value)
}