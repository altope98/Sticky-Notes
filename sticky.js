var cont;

export class Nota{
    constructor(title){
        this.content="";
        this.title=title;
        this.f=new Date();
        this.fecha=this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
        this.not = document.createElement("div");
        this.not.style.margin="2rem";
        this.not.style.backgroundColor="yellow";

        this.botoneliminar=document.createElement("button");
        this.botoneliminar.setAttribute("id", "eliminar"+cont);
        
        this.botoneliminar.textContent="eliminar";

        this.h3= document.createElement("h3");
        this.h3.style.textAlign="center"
        this.h3.style.margin="1rem";
        this.h3.style.marginBottom="0";
        this.h3.textContent= this.title;
        this.textarea= document.createElement("textarea");
        this.textarea.textContent= "...";
        this.textarea.style.margin="1rem";
        this.textarea.style.marginTop="0.5rem";
        this.textarea.style.marginBottom="0";
        this.textarea.setAttribute("rows", "10");
        this.textarea.setAttribute("cols", "20");
        this.textarea.style.backgroundColor="yellow";
        this.textarea.style.border="0";
        this.fechas= document.createElement("div");
        this.fechas.setAttribute("id","fechas");
        this.fechas.style.display="flex";
        this.p= document.createElement("p");
        this.p.textContent= this.fecha;
        this.p.style.margin="1rem";
        this.transcurrido= document.createElement("p");
        this.transcurrido.textContent="-";
        this.transcurrido.style.cssFloat="right";

        this.not.setAttribute("id", "nota"+cont);
        
        this.fechas.appendChild(this.p);
        this.fechas.appendChild(this.transcurrido);

        this.boton=document.createElement("button");
        this.boton.setAttribute("id", "editar"+cont);
        
        this.boton.textContent="editar";
        
        this.not.appendChild(this.botoneliminar);
        this.not.appendChild(this.h3);
        this.not.appendChild(this.textarea);
        this.not.appendChild(this.fechas);
        this.not.appendChild(this.boton);

        cont++;
        
    }

}