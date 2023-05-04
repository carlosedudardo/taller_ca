function identificarMayorEdad() {
    // Obtener el nombre y la edad ingresados por el usuario
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    
    if (edad >= 18) {
      // Mostrar mensaje si es mayor de edad
      document.getElementById("resultado").innerHTML = "Hola " + nombre + ", eres mayor de edad";
    } else if (edad >= 1) {
      // Mostrar mensaje si es menor de edad
      document.getElementById("resultado").innerHTML = "Hola " + nombre + ", no eres mayor de edad";
    } else {
      // Mostrar mensaje si la edad no es válida
      document.getElementById("resultado").innerHTML = "No es una edad válida.";
    }
  }