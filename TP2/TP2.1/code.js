
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
contenedor.textContent = "Los numeros son: " + numerosAleatorios;

// Suma
var suma = numerosAleatorios.reduce((total, actual) => total + actual, 0);
var resultadosuma = document.getElementById("resultado");
resultadosuma.textContent = "El resultado de la suma es: " + suma;

console.log(suma);
