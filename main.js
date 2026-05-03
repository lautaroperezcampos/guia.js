// ejercicio 1
console.log("Guía JavaScript iniciada");
const nombre = "Lautaro";
let edad = 19;
let vida = 100;
let puntaje = 0;
let estaActivo = true;

console.log(nombre, edad, vida, puntaje, estaActivo);

// ejercicio 2
let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;
console.log("Puntos totales:", puntosBase + bonus - penalizacion);

// ejercicio 3 
const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  const valor = input.value;

  // Convertir valor a número
  const numero = Number(valor);

  // Sumar 10
  const resultado = numero + 10;

  // Mostrar el resultado en pantalla
  mensaje.textContent = resultado;
});

// ejercicio 4
const edad = 15;

if (edad >= 13) {
  console.log("Puede jugar");
} else {
  console.log("No puede jugar todavía");
}

//ejercicio 5
const vida = 45; 

if (vida > 70) {
  console.log("Jugador en buen estado");
} else if (vida >= 30 && vida <= 70) {
  console.log("Jugador herido");
} else if (vida >= 1 && vida <= 29) {
  console.log("Jugador en peligro");
} else if (vida === 0) {
  console.log("Game Over");
} else {
  // desafío extra
  console.log("Valor de vida inválido");
}

// ejercicio 6
let opcion = "iniciar";

switch (opcion) {
  case "iniciar":
    console.log("El juego ha comenzado");
    break;

  case "configuracion":
    console.log("Abriendo configuración");
    break;

  case "creditos":
    console.log("Mostrando créditos");
    break;

  case "salir":
    console.log("Saliendo del juego");
    break;

  default:
    console.log("Opción no válida");
}
