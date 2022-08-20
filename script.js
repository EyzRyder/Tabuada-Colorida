var x, y, total;

function mostrarTexto(texto) {
  document.getElementById('box').innerHTML = texto;
}

function tabuada() {
  let resultado = '';
  var num = prompt('Digite até que número deseja que a tabuada tenha:');

  resultado += '<table>';

  for (x = 1; x <= num; x++) {
    resultado +=
      "<td><table style='width:110%; border: solid rgb(255, 255, 255)'>";

    for (cor = 0, y = 0; cor <= 360, y <= 30; cor += 12, y++) {
      total = x * y;

      if ((cor >= 200 && cor <= 280) || cor >= 330) {
        resultado +=
          "<tr style='color:white;'><td style='background-color:hsl(" +
          cor +
          ",100%,50%)'>" +
          x +
          'X' +
          y +
          '=' +
          total +
          '</td></tr>';
      } else {
        resultado +=
          "<tr><td style='background-color:hsl(" +
          cor +
          ",100%,50%)'>" +
          x +
          'X' +
          y +
          '=' +
          total +
          '</td></tr>';
      }
    }
    resultado += '</table></td>';
  }
  resultado += '</table>';
  mostrarTexto(resultado);
}

function trycatch() {
  var x = prompt('Entre com um número maior que 0 e menor que 11');
  try {
    if (x <= 0) {
      throw 'error1';
    }
    if (x >= 11) {
      throw 'error2';
    }
    if (isNaN(parseInt(x))) {
      /// "isNaN" verifica se é número
      throw 'error3';
    }
  } catch (error) {
    if (error == 'error1') {
      alert('O número deve ser maior que 0');
    }
    if (error == 'error2') {
      alert('O número deve ser menor que 11');
    }
    if (error == 'error3') {
      alert('Entre somente com números maior que 0 e menor que 11');
    }
  } finally {
    alert('Finalizado!');
  }
}
