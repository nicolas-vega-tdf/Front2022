let elimnar = document.getElementById("btn_eliminar");


async function obtenerDatos1(){
    let promesa =  await fetch("https://638a80f081df38ab345742af.mockapi.io/api/users");
    let data = await promesa.json();
    console.log(data);
    data.forEach(element => {
        document.getElementById('tabla').innerHTML+=`  <tr>
                                                            <td>${element.nombre} ${element.apellido}</td>
                                                            <td>${element.trabajo}</td>
                                                            <td>${element.persona}</td>
                                                        </tr>`
   });
}


function cargarDatos(imagen){
    tr = document.createElement("tr");

    let img = document.createElement("img");

    
}


obtenerDatos1()


