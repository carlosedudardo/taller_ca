function comprobarNumero() {
    // Obtener el valor del input
    let numero = parseFloat(document.getElementById("numero").value);

    // Verificar si es un número entero positivo
    if (Number.isInteger(numero) && numero > 0) {
        // Verificar si es par o impar
        if (numero % 2 === 0) {
            document.getElementById("resultado").innerHTML = "El número " + numero + " es par";
        } else {
            document.getElementById("resultado").innerHTML = "El número " + numero + " es impar";
        }
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese un número entero positivo";
    }
}