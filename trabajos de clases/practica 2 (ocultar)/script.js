
let botonOcultar = document.getElementById("ocultar");
botonOcultar.classList.add("estilo");
botonOcultar.addEventListener("click",toggle);

function toggle(){
    document.querySelector("div").classList.toggle("ocultar");
}