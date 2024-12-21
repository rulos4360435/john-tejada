"use strict"
let nombre="andres";
let apellido="calderon";
let edad=28;
const frutas=["banano","pera","piña","manzana"];
const personajes={
    poder:"volar",
    colorTraje:"rojo"
}

class Carro {
    constructor(color,llantas,precio) {
        this.color=color;
        this.llantas=llantas;
        this.precio=precio;
    }
}

const twingo=new Carro("verde","doradas",16);

const resultado=`
    el nombre es ${nombre} el apellido es ${apellido} la edad es ${edad} 
    la fruta es ${frutas[0]} los personajes son ${personajes.colorTraje} ${personajes.poder}`;
  

const contenedor=document.querySelector(".container");
const parrafo=document.createElement("p");
const parrafo1=document.createElement("p")
parrafo1.innerHTML=resultado;
parrafo.innerHTML=` ${twingo.color} ${twingo.llantas} ${twingo.precio}`;
contenedor.appendChild(parrafo).appendChild(parrafo1);


const boton=document.getElementById("btn");

boton.addEventListener("click",(e)=>{
   e.preventDefault();
  
   const Validar=()=>{
    return new Promise ((resolve,reject)=>{
        let casado=prompt("eres casado");

        if (casado=="si" || casado=="SI"){
            resolve("esta casado");
        }
        else{
            reject("no esta casado")
        }
    })
}
async function App(params) {
    try {
        const contenedor=document.querySelector(".container");
        const info=document.createElement("p");
         let resultado= await Validar();
         info.innerHTML=resultado;
         contenedor.appendChild(info)
         setTimeout(() => {
            info.remove()
         }, 3000);
         
    } catch (error) {
        const contenedor=document.querySelector(".container");
        const info=document.createElement("p");
         info.innerHTML=error;
         contenedor.appendChild(info)
         setTimeout(() => {
             info.remove()
         }, 3000);
       
    }
}


App();


})




const estudiantes=["andres","piter","carlos","felipe"];
for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    console.log(estudiante);
    
    
}

const btnLocal=document.getElementById("local");
btnLocal.addEventListener("click",(e)=>{
  e.preventDefault();
  let local=localStorage.setItem("nombre","andres");
  console.log(localStorage.getItem("nombre"));

  
})

const pago={

}
pago.metotodoPago="efectivo";
Object.defineProperty(pago,"cuenta",{value:"nequi",writable:false});

Object.preventExtensions(pago);

console.log(pago);

const suma=(...numero)=>{
 let resultado=0;
 for (let index = 0; index < numero.length; index++) {
    resultado+=numero[index]
    
 }
 console.log(resultado);
 
}

suma(10,10,30)

let verdadero=true;

(verdadero)? console.log("es verdadero")
: console.log("es falso")


const operacion=(num1,num2,num3)=>{
    console.log(num1+num2+num3);
    
}
const numeros=[5,5,5];
operacion(...numeros)

const cuerpo={
    name:"blanco"
}

const negocios={
    name:"libro"
}
function mostrarinformacion(likes,friends){
        return `${this.name} tiene ${likes} likes y  ${friends}`
}


const nueva=mostrarinformacion.bind(negocios);

console.log(nueva(10,15));
console.log(mostrarinformacion.call(cuerpo,4,5));
console.log(mostrarinformacion.apply(cuerpo,[10,5]));


function Validacion(usuario) {
    if (!usuario.nombre) {
         throw new Error("el usuario es obligatorio");
         
    }
    if (usuario.edad < 18) {
        throw new Error("el usuario debe ser mayor de edad");
        
    }
    return `usuario ${usuario.nombre} procedado correctamente`;
}


try {
    const usuario={nombre:"andres",edad:18};
    console.log(Validacion(usuario));
    
} catch (error) {
    console.error(error);
    
}

class CustomError extends Error {
    constructor(message, code) {
        super(message);
        this.name = "CustomError";
        this.code = code;
    }
}

try {
    throw new CustomError("Algo salió mal", 400);
} catch (error) {
    console.error(`${error.name} (${error.code}): ${error.message}`);
}
