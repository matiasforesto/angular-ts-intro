import { Producto, calculaISV } from './06-desestructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/
const carritoCompra: Producto[] = [    
    {
        descripcion:'Telefono 1',
        precio:100
    },
    {
        descripcion:'Telefono 1',
        precio:150
    },
];

const [total, isv] = calculaISV(carritoCompra);

console.log('Total', total);
console.log('ISV', isv);