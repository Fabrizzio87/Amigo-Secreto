let listaNombre = [];
let nuevoNombre = 0;


function agregarAmigo() {
    let nuevoNombre = document.getElementById("amigo").value;

    if (nuevoNombre.trim() === "") {
        alert("Por favor ingrese un nombre válido");
        return;
    }    

    if (listaNombre.includes(nuevoNombre)) {
        alert(`El nombre ${nuevoNombre} ya existe en la lista.`);
        console.log(`El nombre ${nuevoNombre} ya existe en la lista.`);
        limpiarCaja();   
    } else {
        listaNombre.push(nuevoNombre);
        console.log(`Nombre agregado: ${nuevoNombre}`);
        console.log(listaNombre);
        // Crear un nuevo elemento <li>
        let li = document.createElement("li");
        // Asignar el nombre al contenido del <li>
        li.textContent = nuevoNombre; 
        
        // Agregar el <li> al <ul>
        document.getElementById("listaAmigos").appendChild(li);
        limpiarCaja();
    }
}

function limpiarCaja(params) {
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value = "";
}

function sortearAmigo() {
    if (listaNombre.length === 0) {
        alert("No hay amigos para sortear.");
        console.log("No hay amigos para sortear.");
        return;
    }

    // Seleccionar un nombre aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaNombre.length);
    let amigoSorteado = listaNombre[indiceAleatorio];
    console.log(amigoSorteado)
    
    
    // Limpiar resultados anteriores
    document.getElementById("resultado").innerHTML = ""; 
    document.getElementById("listaAmigos").innerHTML = ""; 
    

    // Crear un nuevo elemento <li> para el resultado
    let liamigoSecreto = document.createElement("li");
    liamigoSecreto.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`; // Asignar el nombre sorteado al contenido del <li>
    
    // Agregar el <li> al <ul> de resultados
    //resultadoUl.appendChild(liamigoSecreto);
    
    // Mostrar el resultado en el DOM
    //let resultadoUl = document.getElementById("resultado");

    document.getElementById("resultado").appendChild(liamigoSecreto);
}



