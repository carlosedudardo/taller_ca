function identificarTipo() {
    // Obtener el valor ingresado por el usuario
    var valor = document.getElementById("valor").value;
    
    // Identificar el tipo de dato
    if (isNaN(valor)) {
      document.getElementById("resultado").innerHTML = "El valor ingresado es un texto.";
    } else {
      document.getElementById("resultado").innerHTML = "El valor ingresado es un número.";
    } 
  }