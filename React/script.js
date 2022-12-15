let btn = document.getElementById("btn");
btn.addEventListener("click",toggle);

celda_empleado = document.getElementById("info-empleados");

function toggle(){
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("button").classList.toggle("dark");
}



async function obtenerDatos(){
let promesa = await fetch("https://rickandmortyapi.com/api/character")
.then((res) => res.json())
.then((data) => {
    crearPersona(data);
})
}

function crearPersona(personaje){
    tr = document.createElement("tr")

    let img = document.createElement("img");
    img.src = personaje;
    tr.appenChild(img);

    celda_empleado.appenChild(tr)
}

obtenerDatos()