// Agrega elementos lista 

let boton = document.getElementById("boton");
let lista = document.getElementById("lista");
let inputlista = document.getElementById("inputlista");

function agregarElemento(){
    let elemento = document.createElement("li");
    elemento.innerHTML = inputlista.value;
    lista.appendChild(elemento);
}

// Agrega elementos parrafo

let botonParrafo = document.getElementById("botonParrafo");
let parrafo = document.getElementById("divParrafo");
let inputparrafo = document.getElementById("inputParrafo");

function agregarParrafo(){
    let palabra = document.createElement("p");
    palabra.innerHTML = inputparrafo.value;
    parrafo.appendChild(palabra);
}

