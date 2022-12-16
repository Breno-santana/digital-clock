// hours
function horaAtual() {
  let atualHora = document.getElementById('hora');
  let data = new Date();
  let hora = data.getHours();
  let formatoHora = hora;

  atualHora.innerHTML = formatoHora;

  if (formatoHora < 10) {
    atualHora.innerHTML = formatoHora + '0';
  }
}

setInterval(horaAtual);

// minutes
function minutoAtual() {
  let atualMinuto = document.getElementById('minuto');
  let data = new Date();
  let minuto = data.getMinutes();
  let formatoMinuto = minuto;

  atualMinuto.innerHTML = formatoMinuto;

  if (formatoMinuto < 10) {
    atualMinuto.innerHTML = formatoMinuto + '0';
  }
}

setInterval(minutoAtual);

// seconds
function segundoAtual() {
  let atualSegundo = document.getElementById('segundo');
  let data = new Date();
  let segundo = data.getSeconds();
  let formatoSegundo = segundo;

  atualSegundo.innerHTML = formatoSegundo;

  if (formatoSegundo < 10) {
    atualSegundo.innerHTML = formatoSegundo + '0';
  }
}

setInterval(segundoAtual);
