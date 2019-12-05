import {Nota} from './sticky.js';
var cont=0;

function mostrarNotas(){
    var notas=[new Nota("trhhrthr", "rgrge", "red"), new Nota("dvgsdgv", "rthtrhtrh", "yellow")];
    var div=document.getElementById("plano");
    for (const nota of notas) {
        nota.crearNota();      
        nota.not.setAttribute("id", "nota"+cont);
        cont++;
        div.appendChild(nota.not);
    }
}

mostrarNotas();