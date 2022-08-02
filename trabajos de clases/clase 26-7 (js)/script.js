let contador = 0;

let contar = document.getElementById("contar");
contar.addEventListener("click",contar1);

let restar = document.getElementById("restar");
contar.addEventListener("click",restar);

//let mostrar1 = document.getElementById("mostrar");
//mostrar1.addEventListener("click",mostarPantalla);

function contar1(){
    contador++
    document.querySelector("h1").innerHTML = contador;
}

function restar(){
    contador--;
    document.querySelector("h1").innerHTML = contador;
}



//let datos = document.getElementById("datos");
//datos.addEventListener("input", mostrar);

//function mostrar(){
    //console.log(datos.value)
//}