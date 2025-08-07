// é um any, so que mais seguro

let x: unknown;
x = 100;
x = 'Luiz';
const y = 800;

if (typeof x === 'number') console.log(x+y); // o unknown obriga a uma checagem de tipo para fazer a soma neste exemplo
