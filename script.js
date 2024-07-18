function startTimer() {
    var time = parseInt(document.getElementById('timeInput').value, 10);
    //var time = document.getElementById('timeInput').value; el error que tenia que no tenia el parseint y el value le faltaba el 10
    var timerDisplay = document.getElementById('timer'); 

    var interval = setInterval(function() {

        time--;
        if (time == '0') {
            clearInterval(interval);
            timerDisplay.textContent = '¡Tiempo terminado!';
            //  timerDisplay.textConten = '¡Tiempo terminado!'; le faltaba una t
        } else {
            timerDisplay.textContent = 'Tiempo restante: ' + time + ' segundos';
           
        }
    }, 1000);
}

var button = document.querySelector('button');
button.addEventListener('click', startTimer);