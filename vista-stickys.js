import {Nota} from './sticky.js';
var cont=0;

function mostrarNotas(){
    var notas=[new Nota("trhhrthr", "rgrge", "red"), new Nota("dvgsdgv", "rthtrhtrh", "yellow"), new Nota("vaca","djfsdhjfvbdjf", "blue")];
    var div=document.getElementById("plano");
    div.style.display="flex";
    
    for (const nota of notas) {   
        nota.not.setAttribute("id", "nota"+cont);
        cont++;
        div.appendChild(nota.not);
    }
}

mostrarNotas();




//intervalo de tiempo transcurrido cada minuto

//hacer el update con un boton de momento

//hacer las dos vistas al pulsar boton

//cambiar boton por un lapiz o algo

//hacer boton de crear nota y modificar constructor de nota
