// function identificar() {
//     let numerosStr = document.getElementById("numeros").value;
//     let numeros = numerosStr.split(",").map(Number);
//     let resultado = "";
//     for (let i = 0; i < numeros.length; i++) {
//         if (numeros[i] % 2 == 0) {
//             resultado += "-" + numeros[i] + " es número par<br>";
//         } else {
//             resultado += "-" + numeros[i] + " es número impar<br>";
//         }
//     }
//     document.getElementById("resultado").innerHTML = resultado;
// }

function identificar() {
    // Obtenemos el valor ingresado por el usuario
    var numerosString = document.getElementById("numeros").value;

    // Convertimos el string a un arreglo de números
    var numeros = numerosString.split(",");

    // Creamos variables para almacenar los números pares, impares, enteros y decimales
    var pares = [];
    var impares = [];
    var enteros = [];
    var decimales = [];

    // Recorremos el arreglo de números y los separamos según su tipo
    for (var i = 0; i < numeros.length; i++) {
        var numero = parseFloat(numeros[i]); // Convertimos el string a un número

        if (Number.isInteger(numero)) { // Si el número es entero
            enteros.push(numero);

            if (numero % 2 === 0) { // Si el número es par
                pares.push(numero);
            } else { // Si el número es impar
                impares.push(numero);
            }

        } else { // Si el número es decimal
            decimales.push(numero);
        }
    }

    // Construimos el resultado
    var resultado = "Números enteros: " + enteros.join(", ") + "<br>";
    resultado += "Números decimales: " + decimales.join(", ") + "<br>";
    resultado += "Números pares: " + pares.join(", ") + "<br>";
    resultado += "Números impares: " + impares.join(", ") + "<br>";

    // Mostramos el resultado en la página
    document.getElementById("resultado").innerHTML = resultado;
}