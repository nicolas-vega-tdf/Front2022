async function obtenerDatos(){
    const respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados")
    const data = await respuesta.json();
    console.log(data);

    data.forEach(element => {

        document.getElementById('table').innerHTML+=`  <tr>
             <td>${element.nombre} ${ element.apellido}</td>
             <td>${element.area}</td>
             <td>${element.domicilio}</td>
             <td><button class="ver" id="${element.id}">Ver</button></td>
             </tr>`      
    
   });

   let btn = document.querySelectorAll(".ver");
   btn.forEach(item => {
    item.addEventListener('click', (e) => {
        mostrarUno(e.target.id);
    });
   })

} 

async function mostrarUno(id){
    const respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+id)
    const data = await respuesta.json();
    console.log(data);

    let personaje = document.getElementById("personaje");
    personaje.innerHTML = "";

    let nombre = document.createElement("h2");
    nombre.innerHTML = data.nombre+" "+data.apellido;

    let area = document.createElement("h3");
    area.innerHTML = data.area;
    
    let domicilio = document.createElement("h3");
    domicilio.innerHTML = data.domicilio;

    let imagen = document.createElement("h4");
    imagen.innerHTML = `<img src="${data.foto}"></img>`

    
    personaje.appendChild(nombre);
    personaje.appendChild(area);
    personaje.appendChild(domicilio);
    personaje.appendChild(imagen);

}

let datos={

    "nombre":"Nicolas",
    "apellido":"Vega",
    "area":"Web",
    "domicilio":"nueva ciudad de Lusail",
    "foto":"https://cdn.motor1.com/images/mgl/KEgZ0/s1/ken-block-pikes-peak.jpg",
    "id":"35"
}

async function modificarDatos(datos){
    const res = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+datos.id, {
        method:"PUT",
        body:JSON.stringify(datos),
        headers:{"Content-type":"application/json"}
    });
    const data = await res.json();
            console.log(data)
}

//modificarDatos(datos)
obtenerDatos();