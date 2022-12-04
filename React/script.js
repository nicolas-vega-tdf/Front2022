let nombre = document.getElementById("nombre");
let statu = document.getElementById("status");
let foto = document.getElementById("foto");
let btn = document.getElementById("btn");
btn.addEventListener("click",toggle);

function toggle(){
    document.querySelector("body").classList.toggle("dark")
}


async function obtenerNombre(){
    console.log("Buscando Nombre");
    let res =  await fetch("https://rickandmortyapi.com/api/character");
    let data = await res.json();
   data.results.forEach(element => {
    nombre.innerHTML += element.name;
   });
}

async function obtenerEspecie(){
    console.log("Buscando especie");
    let res =  await fetch("https://rickandmortyapi.com/api/character");
    let data = await res.json();
    data.results.forEach(element => {
        statu.innerHTML += element.species;
    });
}

async function obtenerImagen(){
    console.log("Buscando imagen");
    let res =  await fetch("https://rickandmortyapi.com/api/character");
    let data = await res.json();
    data.results.forEach(element => {
       foto.innerHTML += element.image
    });
}
//data.results.forEach(element => {
//    console.log(element.name);
//});
obtenerNombre()
obtenerEspecie()
obtenerImagen()
