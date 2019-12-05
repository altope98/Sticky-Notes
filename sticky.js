export class Nota{
    constructor(title, contenido, color){
        this.title=title;
        this.contenido=contenido;
        this.color=color;
        this.fecha=new Date();
        this.not = document.createElement("div");
        this.not.style.width="150px";
        this.not.style.height="150px";
        //this.not.setAttribute("height", "40");
        this.not.style.backgroundColor=this.color;
        //this.not.setAttribute("background-color", this.color);
        
        
    }

    crearNota(){
        let h3= document.createElement("h3");
        h3.textContent= this.title;
        let textarea= document.createElement("textarea");
        textarea.textContent= this.contenido;
        let p= document.createElement("p");
        p.textContent= this.fecha;
        let transcurrido= document.createElement("p");
        this.not.appendChild(h3);
        this.not.appendChild(textarea);
        this.not.appendChild(p);
        this.not.appendChild(transcurrido);


    }

}