
let input = document.getElementById("inputTarea");
let lista = document.getElementById("lista");

let btntarea = document.getElementById("btnTarea");
btntarea.addEventListener("click",agregar);

let btnborrar = document.getElementById("btnBorrar");
btnborrar.addEventListener("click",limpiar);

function agregar(){
    let elemento = document.createElement("li");
    elemento.innerHTML = input.value ;
    lista.appendChild(elemento);
}

function limpiar(){
    lista.innerHTML = " ";
}

btntarea.classList.add("estilo");
btnborrar.classList.add("color");


