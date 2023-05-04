function calcularPromedio() {
    // Obtener el nombre de la persona, el nombre de la materia y las tres notas ingresadas por el usuario
    var nombre = document.getElementById("nombre").value;
    var materia = document.getElementById("materia").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    
    // Calcular el promedio de las tres notas
    var promedio = (nota1 + nota2 + nota3) / 3;
    
    // Determinar si el usuario pasa o pierde la materia y mostrar el resultado
    if (promedio >= 3.0) {
      document.getElementById("resultado").innerHTML = nombre + " pasó la materia de " + materia + " con un promedio de " + promedio.toFixed(1);
      document.getElementById("resultado").style.color = "green";
    } else {
      document.getElementById("resultado").innerHTML = nombre + " perdió la materia de " + materia + " con un promedio de " + promedio.toFixed(1);
      document.getElementById("resultado").style.color = "red";
    }
  }