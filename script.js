function mostrarTexto(texto) {
  document.getElementById('resultado').innerHTML = texto;
}

function executar(ev) {
  ev.preventDefault();
  var resultado = '<table><tr>';

  // Escrever aqui o código
  for (var i = 1; i <= 10; i = i + 1) {
    resultado = resultado + '<td>';
    for (var j = 0; j <= 10; j = j + 1) {
      var multiplicacao = i * j;
      var linha = '' + i + 'x' + j + '=' + multiplicacao + '<br>';
      resultado = resultado + linha;
    }
    resultado = resultado + '</td>';
    if (i % 5 === 0) {
      resultado = resultado + '<tr></tr>';
    }
  }
  resultado = resultado + '</tr></table>';
  mostrarTexto(resultado);
}
