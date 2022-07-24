let btn_nombre = document.getElementById("btn_nombre");
btn_nombre.addEventListener("click", mostrar);

function mostrar() {
    let nombre = "pepe";
    let apellido = "pepito";
    let edad = "19";
    let inputApellido = document.getElementById("inputApellido");
    let inputNombre = document.getElementById("inputNombre");
    let inputedad = document.getElementById("inputedad");
    nombre = inputNombre.value;
    apellido = inputApellido.value;
    edad = inputedad.value;

    alert("Bienvenido " + nombre +" "+ apellido +" "+ edad );
}