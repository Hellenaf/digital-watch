function updateTime() {

    const time = document.querySelector('.time');

    const agora = new Date();
    
    const horario = fixTime(agora.getHours()) + ':' + fixTime(agora.getMinutes()) + ':' + fixTime(agora.getSeconds());
    
    time.textContent = horario;
    
}

function fixTime(numero) {
    if (numero < 10) {
        numero = '0' + numero;
    }
    return numero;
}

setInterval(updateTime, 1000);