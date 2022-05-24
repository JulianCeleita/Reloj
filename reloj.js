
(function(){

    var actualizarHora = function(){            // Función que repetirá todo cada segundo

// Variables para obtener los datos del sistema
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();


// Variables para mostrar los datos obtenidos ya en el documento desde el parrafo (p)
// Estamos accediendo a los datos y los almacenamos en una variable
        var pHoras = document.getElementById("horas"),
            pAMPM = document.getElementById("ampm"),
            pMinutos = document.getElementById("minutos"),
            pSegundos = document.getElementById("segundos"),
            pDiaSemana = document.getElementById("diaSemana"),
            pDia = document.getElementById("dia"),
            pMes = document.getElementById("mes"),
            pYear = document.getElementById("year");


// Para las fechas:
// Creamos un array con dias de la semana
        var semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        pDiaSemana.textContent = semana[diaSemana];             //El numero tomado de diaSemana en el sistema, uselo para escoger el numero de dia de arriba (empieza dom=0)

        pDia.textContent = dia;

        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        pMes.textContent = meses[mes];

        pYear.textContent = year;

// Para el reloj:

        if (horas >= 12) {                      // Si horas es >=12 restele 12 para formato de 12 horas en reloj
            horas = horas -12;
            ampm = "PM";
        } else {
            ampm = "AM";                        // Si no cumple lo de arriba, pondrá AM
        }

        if (horas == 0){                        // Si son las 0 horas, nos ponga que son las 12
            horas = 12;
        };


// Ponerle 0 a los segundos, minutos y horas 
        if (minutos < 10) { minutos = "0" + minutos };      // Si minutos es menor a 0, agrega un 0 antes del valor minuto.
        if (horas < 10) { horas = "0" + horas };
        if (segundos < 10) { segundos = "0" + segundos};


        pHoras.textContent = horas;
        
        pAMPM.textContent = ampm;
        
        pMinutos.textContent = minutos;
        
        pSegundos.textContent = segundos;
            
    };

    actualizarHora();

// Para que se repita cada segundo
    var intervalo = setInterval(actualizarHora, 1000);

}())


