function buscar() {
    let texto = document.getElementById("texto").value;
    let texto_buscar = document.getElementById("buscar").value;
    let resultado = document.getElementById("resultado");
    
    let coincidencias = texto.match(new RegExp(texto_buscar, "gi"));
    if (coincidencias) {
      resultado.innerHTML = texto.replace(new RegExp(`(${coincidencias.join("|")})`, "gi"), '<label style="color: red">$1</label>');
      // resultado.innerHTML = texto.replace() + '<label style="color: red">';  span class='resaltado'>$1</span
    } else {
      resultado.innerHTML = texto.replace()+"<br>"+"<br>"+"NO SE ENCONTRARON COINCIDENCIAS.";
    }
  }