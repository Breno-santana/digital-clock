// hours
function horaAtual() {
  let hora = document.getElementById('hora');
  let data = new Date();
  let h = data.getHours();
  let formatoHora = h;

  hora.innerHTML = formatoHora;

  if (formatoHora < 10) {
    hora.innerHTML = formatoHora + '0';
  }
}

setInterval(horaAtual);

// minutes
function minutoAtual() {
  let hora = document.getElementById('minuto');
  let data = new Date();
  let m = data.getMinutes();
  let formatoMinuto = m;

  hora.innerHTML = formatoMinuto;

  if (formatoMinuto < 10) {
    hora.innerHTML = formatoMinuto + '0';
  }
}

setInterval(minutoAtual);

// seconds
function segundoAtual() {
  let hora = document.getElementById('segundo');
  let data = new Date();
  let s = data.getSeconds();
  let formatoSegundo = s;

  hora.innerHTML = formatoSegundo;

  if (formatoSegundo < 10) {
    hora.innerHTML = formatoSegundo + '0';
  }
}

setInterval(segundoAtual);
