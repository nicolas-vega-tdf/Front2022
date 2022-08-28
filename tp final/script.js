


let btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click",cargarProductos);

let cargarProductos1 = document.getElementById("cargarProductos");

let btnComprar = document.getElementById("btnComprar");
btnComprar.addEventListener("click",comprar);

let total = 0;

let productos = ["azucar","leche","miel","cerveza","galletitas"];
let stock = [10,15,10,20,15];
let precio =[108,145,535,326,187];
let cantidad = [] ;

function cargarProductos(){
    console.log("entro funcion 1");
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
        selecionarCantidad.min = "0" ;
        selecionarCantidad.id = `selectCantidad${i}`;
        divProductos.appendChild(nombreProductos);
        divProductos.appendChild(precioProducto);
        divProductos.appendChild(selecionarCantidad);
        cargarProductos1.appendChild(divProductos);
        //cantidad = selecionarCantidad.value;
    }
}
function comprar (){
    for(let i = 0; i < stock.length ; i++){
    let selecionarCantidad = document.getElementById(`selectCantidad${i}`);
     cantidad[i]= parseInt(selecionarCantidad.value);
    } 
     
     for(let i = 0; i < stock.length ; i++){
        if(cantidad[i] >= stock[i]){
            alert("la cantidad selecionada de "+ productos[i] +" no esta disponible");
        }else{
            total += cantidad[i] * precio[i] ;
        }
    }
    console.log(cantidad);
    console.log("El resumen de su compra es :")
    for(let i = 0; i < productos.length; i++){
   //document.querySelector("#cargarProductos").innerHTML[i] = "El resumen de su compra es: " + productos[i] + cantidad[i] + " y el total es: " + total;
   console.log( cantidad[i] +" "+ productos[i] )
    }
    console.log("el total de su compra es : " + total);
}

