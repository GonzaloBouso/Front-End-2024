// Paso 1: Define un array vacío
var numerosAleatorios = [];

// Paso 2: Genera los números aleatorios
for (var i = 0; i < 10; i++) {
    var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    numerosAleatorios.push(numeroAleatorio); // Añade el número aleatorio al array
}

// Ahora el array `numerosAleatorios` contiene 10 números aleatorios entre 1 y 100
console.log(numerosAleatorios);

// Mostrar numeros en el HTML


var contenedor = document.getElementById('contenedor');

// Paso 2: Array 
numerosAleatorios = [];

// Paso 3 y 4: Recorrer el array y agregar los elementos al DOM
numerosAleatorios.forEach(elemento => {
    const nuevoElemento = document.createElement('p'); // Crear un nuevo párrafo para cada elemento
    nuevoElemento.textContent = elemento; // Establecer el texto del párrafo como el elemento del array
    contenedor.appendChild(nuevoElemento); // Agregar el párrafo como hijo del contenedor en el HTML
});