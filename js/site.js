function validarFormulario() {
  var nome = document.forms["meuForm"]["txtnome"].value;
  if (nome == "") {
    alert("Preencher o seu nome.");
    return false;
  }
}
