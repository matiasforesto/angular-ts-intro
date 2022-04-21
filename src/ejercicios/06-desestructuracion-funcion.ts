/*
    ===== Código de TypeScript =====
*/
export interface Producto{
    descripcion: string;
    precio: number;
}

const telefono: Producto= {
    descripcion: 'Sony',
    precio: 150
}

const tablet: Producto= {
    descripcion: 'iPad Air',
    precio: 500
}

export function calculaISV(productos: Producto[]): [number, number]{
    let total= 0;

    productos.forEach( ({precio}) => {
        total+= precio;
    });

    return [total, total*0.15];
}

//const articulos= [telefono, tablet];
//const [total, isv] = calculaISV(articulos);

//console.log('Total:', total);
//console.log('ISV:', isv);