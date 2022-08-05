let boton = document.getElementById("btnDiv");
boton.addEventListener("click", evento , ColorCode);

let div = document.getElementById("div");

function evento(){
 let crearDiv = document.createElement("div");
 div.appendChild(crearDiv); 
}           

// function ColorCode() {
//     let makingColorCode = '0123456789ABCDEF';
//     let finalCode = '#';
//     for (let i = 0; i < 6;i++) {
//        finalCode =finalCode+ makingColorCode[Math.floor(Math.random() * 16)];
//     }
//     return finalCode;
//  }