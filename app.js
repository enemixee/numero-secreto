let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let = numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // lineas finales
    console.log(intentos);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos==1) ? 'vez' : 'veses' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;    
        limpiarCaja();

    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`introduce un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); // generar numero aleatorio de nuevo
    intentos = 1;
    console.log(numeroSecreto);
}


function reiniciarJuego() {
    limpiarCaja(); //limpiar caja
    condicionesIniciales(); //Rellamar mensajes iniciales
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


condicionesIniciales();




  //let = numeroDeUsuario = document.getElementById('valorUsuario').value; comprueva string
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);


     // === tres iguales comprueva tipo de dato