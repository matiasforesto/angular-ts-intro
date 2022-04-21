/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen:number;
    segundo:number;
    cancion:string;
    detalles: Detalles;
}

interface Detalles{
    autor:string;
    anio:number;
}

const reproductor: Reproductor={
    volumen:90,
    segundo:36,
    cancion:'Forever ',
    detalles:{
        autor:'Pepe',
        anio:2018,
    }
}

const {volumen, segundo, cancion, detalles}=reproductor;
const {autor} = detalles;

/*
console.log('EL volumen actual es: ', volumen);
console.log('EL segundo actual es: ', segundo);
console.log('EL cancion actual es: ', cancion);
console.log('EL autor actual es: ', autor);
*/

const dbz:string[] = ['goku', 'vegueta', 'trunks'];
const[p1, p2, p3]= dbz;
console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);