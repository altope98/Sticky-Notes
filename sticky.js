export class Nota{
    constructor(title, contenido, color){
        this.title=title;
        this.contenido=contenido;
        this.color=color;
        this.f=new Date();
        this.fecha=this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
        this.not = document.createElement("div");
        this.not.style.margin="2rem";
        /*this.not.style.width="150px";
        this.not.style.height="150px";*/
        //this.not.setAttribute("height", "40");
        this.not.style.backgroundColor=this.color;
        //this.not.setAttribute("background-color", this.color);
        let h3= document.createElement("h3");
        h3.style.textAlign="center"
        h3.style.margin="1rem";
        h3.style.marginBottom="0";
        h3.textContent= this.title;
        let textarea= document.createElement("textarea");
        textarea.textContent= this.contenido;
        textarea.style.margin="1rem";
        textarea.style.marginTop="0.5rem";
        textarea.style.marginBottom="0";
        textarea.setAttribute("rows", "10");
        textarea.setAttribute("cols", "20");
        textarea.style.backgroundColor=this.color;
        textarea.style.border="0";
        let fechas= document.createElement("div");
        fechas.setAttribute("id","fechas");
        fechas.style.display="flex";
        let p= document.createElement("p");
        p.textContent= this.fecha;
        p.style.margin="1rem";
        let transcurrido= document.createElement("p");
        transcurrido.textContent="-";
        transcurrido.style.cssFloat="right";
        fechas.appendChild(p);
        fechas.appendChild(transcurrido);

        let boton=document.createElement("button");
        boton.textContent="editar";
        

        this.not.appendChild(h3);
        this.not.appendChild(textarea);
        this.not.appendChild(fechas);
        this.not.appendChild(boton);
        
    }


}