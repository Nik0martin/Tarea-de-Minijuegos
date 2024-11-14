 //hacemos que el cronometro arranque en cuanto se cargue la pagina como ocurre en los crucigramas de el Pais
 window.addEventListener('load', function(){
    //creamos una constante y lo almacenamos ahi para que el codigo sea mas limpio y legible
    const constanteCronometro = document.getElementById('cronometro');
    //creo constantes de minutos y de segundos no voy a crear de horas porque dudo que nadie pueda estar una hora con esto
    let segundos =0;
    let minutos =0;

    //creamos la funcion para que se actualice el cronometro
    function actualizarcronometro(){
        segundos++;
        //como me interesa que el cronometro se muestre en minutos a diferencia del temporizador del quizz vamos a crear un if para que cuando los segundos lleguen a 60 se sume 1 la variable minutos
        if (segundos===60){
            //cuando se llegue a 60 los segundos volveran a 0
            segundos=0;
            //se sumara un minuto
            minutos++;

        }
        //la unica manera que se me ocurrio para actualizarlo era basicamente cambiando el 00:00 cada segundo por las variables por las que vaya
        //si se te ocurre otra forma de actualizar lo que es el visual hazla porque con esta no se quedan todos los ceros
        
        constanteCronometro.textContent = minutos + ':'+segundos;
    }
    //voy a usar un set interval que llame a la funcion actualizarcronometro cada segundo
    setInterval(actualizarcronometro, 1000);
});
//metemos un boton de verificar
const verificar = document.getElementById("Botonverificar");
//constantes de las celdas de la primera fila
//vamos a coger los valores que haya dentro de la celda y ha comprobar si la letra introducida es la correcta
//uso querySelector porque al ser de tipo input no se puede usar getelementbyid
const c1_1 = document.querySelector('#c1\\.1 input[type="text"]');
const c1_2 = document.querySelector('#c1\\.2 input[type="text"]');
const c1_3 = document.querySelector('#c1\\.3 input[type="text"]');
const c1_4 = document.querySelector('#c1\\.4 input[type="text"]');
const c1_5 = document.querySelector('#c1\\.5 input[type="text"]');
//constantes segundafila
const c2_1 = document.querySelector('#c2\\.1 input[type="text"]');
const c2_2 = document.querySelector('#c2\\.2 input[type="text"]');
const c2_3 = document.querySelector('#c2\\.3 input[type="text"]');
const c2_4 = document.querySelector('#c2\\.4 input[type="text"]');
const c2_5 = document.querySelector('#c2\\.5 input[type="text"]');
const c2_6 = document.querySelector('#c2\\.6 input[type="text"]');
//constantes para la tercera fila
const c3_1 = document.querySelector('#c3\\.1 input[type="text"]');
const c3_2 = document.querySelector('#c3\\.2 input[type="text"]');
const c3_3 = document.querySelector('#c3\\.3 input[type="text"]');
const c3_5 = document.querySelector('#c3\\.5 input[type="text"]');
const c3_6 = document.querySelector('#c3\\.6 input[type="text"]');
//constantes 4 fila
const c4_1 = document.querySelector('#c4\\.1 input[type="text"]');
const c4_2 = document.querySelector('#c4\\.2 input[type="text"]');
const c4_3 = document.querySelector('#c4\\.3 input[type="text"]');
const c4_4 = document.querySelector('#c4\\.4 input[type="text"]');
const c4_5 = document.querySelector('#c4\\.5 input[type="text"]');
const c4_6 = document.querySelector('#c4\\.6 input[type="text"]');
//constantes 5 fila
const c5_1 = document.querySelector('#c5\\.1 input[type="text"]');
const c5_3 = document.querySelector('#c5\\.3 input[type="text"]');
const c5_4 = document.querySelector('#c5\\.4 input[type="text"]');
const c5_5 = document.querySelector('#c5\\.5 input[type="text"]');
const c5_6 = document.querySelector('#c5\\.6 input[type="text"]');
//constantes fila 6
const c6_1 = document.querySelector('#c6\\.1 input[type="text"]');
const c6_2 = document.querySelector('#c6\\.2 input[type="text"]');
const c6_3 = document.querySelector('#c6\\.3 input[type="text"]');
const c6_4 = document.querySelector('#c6\\.4 input[type="text"]');
const c6_5 = document.querySelector('#c6\\.5 input[type="text"]');
const c6_6 = document.querySelector('#c6\\.6 input[type="text"]');
verificar.addEventListener("click", function() {

    //las otras constantes de primera fila pasandolo a minuscula por sis e escribe en mayuscula
    const letrac11 = c1_1.value.toLowerCase();
    const letrac12 = c1_2.value.toLowerCase();
    const letrac13 = c1_3.value.toLowerCase();
    const letrac14 = c1_4.value.toLowerCase();
    const letrac15 = c1_5.value.toLowerCase();
    //constantes de segunda fila pasando a minuscula
    const letrac21 = c2_1.value.toLowerCase();
    const letrac22 = c2_2.value.toLowerCase();
    const letrac23 = c2_3.value.toLowerCase();
    const letrac24 = c2_4.value.toLowerCase();
    const letrac25 = c2_5.value.toLowerCase();
    const letrac26 = c2_6.value.toLowerCase();
    //constantes de tercera fila a minuscula
    const letrac31 = c3_1.value.toLowerCase();
    const letrac32 = c3_2.value.toLowerCase();
    const letrac33 = c3_3.value.toLowerCase();
    const letrac35 = c3_5.value.toLowerCase();
    const letrac36 = c3_6.value.toLowerCase();
    //constantes 4 fila a minuscula
    const letrac41 = c4_1.value.toLowerCase();
    const letrac42 = c4_2.value.toLowerCase();
    const letrac43 = c4_3.value.toLowerCase();
    const letrac44 = c4_4.value.toLowerCase();
    const letrac45 = c4_5.value.toLowerCase();
    const letrac46 = c4_6.value.toLowerCase();
    //constantes 5 fila
    const letrac51 = c5_1.value.toLowerCase();
    const letrac53 = c5_3.value.toLowerCase();
    const letrac54 = c5_4.value.toLowerCase();
    const letrac55 = c5_5.value.toLowerCase();
    const letrac56 = c5_6.value.toLowerCase();
    // constantes a minuscula fila 6
    const letrac61 = c6_1.value.toLowerCase();
    const letrac62 = c6_2.value.toLowerCase();
    const letrac63 = c6_3.value.toLowerCase();
    const letrac64 = c6_4.value.toLowerCase();
    const letrac65 = c6_5.value.toLowerCase();
    const letrac66 = c6_6.value.toLowerCase();


    //verificador de la primera fila
    if (letrac11 !== 's') {
        c1_1.style.backgroundColor = 'red';
    } else {
        c1_1.style.backgroundColor = 'green';
    }

    if (letrac12 !== 'k') {
        c1_2.style.backgroundColor = 'red';
    } else {
        c1_2.style.backgroundColor = 'green';
    }

    if (letrac13 !== 'a') {
        c1_3.style.backgroundColor = 'red';
    } else {
        c1_3.style.backgroundColor = 'green';
    }
    if (letrac14 !== 't') {
        c1_4.style.backgroundColor = 'red';
    } else {
        c1_4.style.backgroundColor = 'green';
    }
    if (letrac15 !== 'e') {
        c1_5.style.backgroundColor = 'red';
    } else {
        c1_5.style.backgroundColor = 'green';
    }

    //verificador segunda fila
    if (letrac21 !== 'p') {
        c2_1.style.backgroundColor = 'red';
    } else {
        c2_1.style.backgroundColor = 'green';
    }
    if (letrac22 !== 'o') {
        c2_2.style.backgroundColor = 'red';
    } else {
        c2_2.style.backgroundColor = 'green';
    }
    if (letrac23 !== 'r') {
        c2_3.style.backgroundColor = 'red';
    } else {
        c2_3.style.backgroundColor = 'green';
    }
    if (letrac24 !== 'o') {
        c2_4.style.backgroundColor = 'red';
    } else {
        c2_4.style.backgroundColor = 'green';
    }
    if (letrac25 !== 's') {
        c2_5.style.backgroundColor = 'red';
    } else {
        c2_5.style.backgroundColor = 'green';
    }
    if (letrac26 !== 'a') {
        c2_6.style.backgroundColor = 'red';
    } else {
        c2_6.style.backgroundColor = 'green';
    }
    //verificadores 3 fila
    if (letrac31 !== 'e') {
        c3_1.style.backgroundColor = 'red';
    } else {
        c3_1.style.backgroundColor = 'green';
    }
    if (letrac32 !== 'n') {
        c3_2.style.backgroundColor = 'red';
    } else {
        c3_2.style.backgroundColor = 'green';
    }
    if (letrac33 !== 'r') {
        c3_3.style.backgroundColor = 'red';
    } else {
        c3_3.style.backgroundColor = 'green';
    }
    if (letrac35 !== 'c') {
        c3_5.style.backgroundColor = 'red';
    } else {
        c3_5.style.backgroundColor = 'green';
    }
    if (letrac36 !== 'u') {
        c3_6.style.backgroundColor = 'red';
    } else {
        c3_6.style.backgroundColor = 'green';
    }
    //verificadores 4 fila
    if (letrac41 !== 'a') {
        c4_1.style.backgroundColor = 'red';
    } else {
        c4_1.style.backgroundColor = 'green';
    }
    if (letrac42 !== 'g') {
        c4_2.style.backgroundColor = 'red';
    } else {
        c4_2.style.backgroundColor = 'green';
    }
    if (letrac43 !== 'o') {
        c4_3.style.backgroundColor = 'red';
    } else {
        c4_3.style.backgroundColor = 'green';
    }
    if (letrac44 !== 't') {
        c4_4.style.backgroundColor = 'red';
    } else {
        c4_4.style.backgroundColor = 'green';
    }
    if (letrac45 !== 'a') {
        c4_5.style.backgroundColor = 'red';
    } else {
        c4_5.style.backgroundColor = 'green';
    }
    if (letrac46 !== 'r') {
        c4_6.style.backgroundColor = 'red';
    } else {
        c4_6.style.backgroundColor = 'green';
    }
    //verificadores 5 fila
    if (letrac51 !== 'r') {
        c5_1.style.backgroundColor = 'red';
    } else {
        c5_1.style.backgroundColor = 'green';
    }
    if (letrac53 !== 'b') {
        c5_3.style.backgroundColor = 'red';
    } else {
        c5_3.style.backgroundColor = 'green';
    }
    if (letrac54 !== 'o') {
        c5_4.style.backgroundColor = 'red';
    } else {
        c5_4.style.backgroundColor = 'green';
    }
    if (letrac55 !== 'l') {
        c5_5.style.backgroundColor = 'red';
    } else {
        c5_5.style.backgroundColor = 'green';
    }
    if (letrac56 !== 'a') {
        c5_6.style.backgroundColor = 'red';
    } else {
        c5_6.style.backgroundColor = 'green';
    }
    //verificadores fila 6
    if (letrac61 !== 's') {
        c6_1.style.backgroundColor = 'red';
    } else {
        c6_1.style.backgroundColor = 'green';
    }
    if (letrac62 !== 'e') {
        c6_2.style.backgroundColor = 'red';
    } else {
        c6_2.style.backgroundColor = 'green';
    }
    if (letrac63 !== 'a') {
        c6_3.style.backgroundColor = 'red';
    } else {
        c6_3.style.backgroundColor = 'green';
    }
    if (letrac64 !== 'm') {
        c6_4.style.backgroundColor = 'red';
    } else {
        c6_4.style.backgroundColor = 'green';
    }
    if (letrac65 !== 'o') {
        c6_5.style.backgroundColor = 'red';
    } else {
        c6_5.style.backgroundColor = 'green';
    }
    if (letrac66 !== 's') {
        c6_6.style.backgroundColor = 'red';
    } else {
        c6_6.style.backgroundColor = 'green';
    }

});
