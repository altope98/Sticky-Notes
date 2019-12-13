import {Nota} from './sticky.js';
var cont=0;
var notas=[];


window.onload = () => {
    mostrarTablon();
}

function mostrarTablon() {
    var div=document.getElementById("plano");
    document.body.style.backgroundImage="url('https://www.publicdomainpictures.net/pictures/30000/velka/cork-board.jpg')";
    div.style.display="flex";
    mostrarNotas();

    
    let div2=document.createElement("div");
    
    
    let botonNueva=document.createElement("button");
    botonNueva.setAttribute("id","nueva");
    botonNueva.addEventListener("click", crearNota);
    botonNueva.textContent="Nueva nota";

    let input=document.createElement("input");
    input.setAttribute("id","input");
    input.value="Escribe titulo aqui...";


    div2.appendChild(input);
    div2.appendChild(botonNueva);

    let botonCambio=document.createElement("button");
    botonCambio.setAttribute("id","cambio");
    botonCambio.textContent="Cambiar apariencia";
    div2.appendChild(botonCambio);
    div.appendChild(div2);


}

function mostrarNotas(){
    var temporizador=1;
    let div=document.getElementById("plano");
    setInterval(() => {
        if(notas!=null)
        for (const nota of notas) {
            if(nota!=null){
                //div.appendChild(nota.not);
            if(nota.transcurrido.textContent=="-"){
                nota.transcurrido.textContent=temporizador+" minuto";
            }else{
                temporizador++;
                nota.transcurrido.textContent=temporizador+" minutos";
            }
        }
        }
    }, 60000);
    
    console.log(notas);
    if(notas!=null)
    for (const nota of notas) {   
        if(nota!=null){

            nota.boton.addEventListener("click", actualizar);
            nota.botoneliminar.addEventListener("click", eliminar);
            div.appendChild(nota.not);

        }

    }

    /*let parse=localStorage.getItem("notas");
    notas=JSON.parse(parse);*/
}


function crearNota() {
    let input=document.getElementById("input");
    notas.push(new Nota(input.value));
    mostrarNotas();
    localStorage.setItem("notas", JSON.stringify(notas));

    
}

function actualizar() {
    let div=document.getElementById("plano");
    for (let i = 0; i < notas.length; i++) {
        let nota=notas[i];
        if(event.target.id==nota.boton.id){
            nota.content=nota.textarea.value;
            notas[i]=null;
            notas[i]=nota;
        }     
    }
    mostrarNotas();
    localStorage.setItem("notas", JSON.stringify(notas));
}

function eliminar() {
    let div=document.getElementById("plano");
    for (let i = 0; i < notas.length; i++) {
        let nota=notas[i];
        if(event.target.id==nota.botoneliminar.id){
            notas[i]=null;
            div.removeChild(nota.not);
        }
    }
    mostrarNotas();
    localStorage.setItem("notas", JSON.stringify(notas));
}


//HACER LA OTRA VISTA (DE TABLA) AL PULSAR BOTON

//CONSEGUIR MOSTRAR DESDE LOCALSTORAGE LAS NOTAS

//CAMBIAR BOTON POR UN LAPIZ Y EL DE CERRAR POR UNA X

//MAQUEAR TODO UN POCO
