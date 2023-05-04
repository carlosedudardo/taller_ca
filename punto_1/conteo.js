function contarCaracteres() {
    // Obtener el valor del campo de texto
    var texto = document.getElementById("texto").value;
    
    // Contar la cantidad de caracteres
    var cantidad = texto.length;
    
    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = cantidad + " caracteres";
  }