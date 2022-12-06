let btn = document.getElementById("btn");
btn.addEventListener("click",toggle);

function toggle(){
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("button").classList.toggle("dark");
}

async function obtenerDatos(){
    console.log("Buscando Nombre");
    let res =  await fetch("https://rickandmortyapi.com/api/character");
    let data = await res.json();
    console.log(data);
    data.results.forEach(element => {
        document.getElementById('table').innerHTML+=`  <tr>
                                                            <td>${element.name}</td>
                                                            <td>${element.status}</td>
                                                            <td>${element.image}</td>
                                                        </tr>`
   });
}


obtenerDatos()



