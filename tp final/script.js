
let btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click",cargarProductos);

let cargarProductos1 = document.getElementById("cargarProductos");

let btnComprar = document.getElementById("btnComprar");


let productos = ["azucar","leche","miel","cerveza","galletitas"];
let stock = [10,15,10,20,15];
let precio =[150,230,400,300,50];



function cargarProductos(){
    for(let i = 0; i < stock.length; i++){
        let divProductos = document.createElement("div");
        divProductos.classList.add("productos-estilo");
        let nombreProductos = document.createElement("p");
        nombreProductos.innerHTML= productos[i];
        let precioProducto = document.createElement("p");
        precioProducto.innerHTML = "$"+(precio[i]);
        let selecionarCantidad = document.createElement("input");
        selecionarCantidad.innerHTML = stock[i];
        selecionarCantidad.type = "number";
        selecionarCantidad.max = stock[i];
        selecionarCantidad.min = 0 ;
        divProductos.appendChild(nombreProductos);
        divProductos.appendChild(precioProducto);
        divProductos.appendChild(selecionarCantidad);
        cargarProductos1.appendChild(divProductos);
    }
}



