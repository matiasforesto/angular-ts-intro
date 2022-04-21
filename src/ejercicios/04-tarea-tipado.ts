/*
    ===== Código de TypeScript =====
*/
interface SuperHeroe{
    nombre:string;
    edad:number;
    direccion: Direccion,
    mostrarDireccion: () => string
}

interface Direccion{
        calle:string,
        pais:string,
        ciudad:string
}


const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion:{
        calle: 'Hipolito Yrigoyen 221',
        pais: 'Argentina',
        ciudad: 'Bell Ville'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);