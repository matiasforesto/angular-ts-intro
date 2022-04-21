/*
    ===== Código de TypeScript =====
*/
interface Pasajero{
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero={
    nombre: 'Fernano',
}

const pasajero2: Pasajero={
    nombre: 'Matias',
    hijos: ['Francis'],
}

function imprimirHijos(pasajero: Pasajero): void{
    //el ? es para que intente solo si viene el argumento opcional sino pasa un 0
    const cuantosHijos = pasajero.hijos?.length || 0;
    let hijos: string;
    if(cuantosHijos > 0)
    {
        hijos= pasajero.nombre+" tiene "+cuantosHijos+ " hijos";
    }
    else{
        hijos= pasajero.nombre+" no tiene hijos";
    }
    console.log(hijos);
    //console.log(cuantosHijos);
}

imprimirHijos(pasajero1);
imprimirHijos(pasajero2);