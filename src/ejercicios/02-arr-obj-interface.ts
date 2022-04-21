/*
    ===== Código de TypeScript =====
*/
let habilidades: string[] = ['Pepe', 'Jose', 'Luis'];

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje ={
    nombre: 'Julio',
    hp: 100,
    habilidades:['h1', 'h2', 'h3']
}

personaje.puebloNatal = 'Bell Ville';

console.table(personaje);