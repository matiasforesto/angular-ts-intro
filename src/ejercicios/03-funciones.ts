/*
    ===== Código de TypeScript =====
*/ 
function sumar(a:number, b:number):number{
    return a+b;
}

const sumarFlecha = (a:number, b:number):number =>{
    return a+b;
}

function multiplicar(numero:number, otroNUmero?:number, base:number = 2):number{
    return numero*base;
}

//const resultado = multiplicar(10, 20, 10);
//console.log(resultado);

interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHp: ()=> void;
}

function curar(personaje: PersonajeLOR, curarX:number):void{
  personaje.pv+=curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Matias',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida', this.pv, 'de', this.nombre);
    }
}

curar(nuevoPersonaje, 40);

nuevoPersonaje.mostrarHp();