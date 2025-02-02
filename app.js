// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista que almacenará los nombres ingresados por el usuario
const listaAmigos = [];

// Función para agregar un amigo a la lista
target="_blank"

function agregarAmigo() {
    const input = document.getElementById("amigo"); // Obtiene el campo de entrada de nombres
    const nombre = input.value.trim(); // Obtiene el valor del input y elimina espacios en blanco
    const listaElement = document.getElementById("listaAmigos"); // Obtiene la lista donde se mostrarán los nombres

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido."); // Muestra una alerta si el campo está vacío
        return;
    }

    listaAmigos.push(nombre); // Agrega el nombre a la lista
    actualizarLista(); // Llama a la función para actualizar la lista en pantalla
    input.value = ""; // Limpia el campo de entrada
}

// Función para actualizar la lista visible en el HTML
function actualizarLista() {
    const listaElement = document.getElementById("listaAmigos"); // Obtiene la lista en el DOM
    listaElement.innerHTML = ""; // Limpia la lista antes de actualizarla

    listaAmigos.forEach(nombre => {
        const li = document.createElement("li"); // Crea un nuevo elemento de lista
        li.textContent = nombre; // Asigna el nombre al elemento
        listaElement.appendChild(li); // Agrega el elemento a la lista en el HTML
    });
}

// Función para sortear un amigo secreto de la lista
target="_blank"

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre antes de sortear."); // Muestra una alerta si la lista está vacía
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); // Genera un índice aleatorio
    const amigoSecreto = listaAmigos[indiceAleatorio]; // Obtiene el nombre correspondiente al índice
    
    mostrarResultado(amigoSecreto); // Llama a la función para mostrar el resultado en pantalla
}

// Función para mostrar el resultado del sorteo en el HTML
target="_blank"

function mostrarResultado(amigo) {
    const resultadoElement = document.getElementById("resultado"); // Obtiene el elemento donde se mostrará el resultado
    resultadoElement.innerHTML = ""; // Limpia cualquier resultado anterior
    
    const li = document.createElement("li"); // Crea un nuevo elemento de lista
    li.textContent = `El amigo secreto es: ${amigo}`; // Asigna el resultado al elemento
    resultadoElement.appendChild(li); // Agrega el elemento a la lista de resultados en el HTML
}

function Reiniciar(){
    const listaElement = document.getElementById("listaAmigos"); // Obtiene la lista en el DOM
    listaElement.innerHTML = ""; 
    listaAmigos.length = 0; // Vacía el array que contiene los nombres
    const resultadoElement = document.getElementById("resultado"); // Obtiene el elemento donde se mostrará el resultado
    resultadoElement.innerHTML = "";
    
}