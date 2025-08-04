// eslint-disable

// tipos básicos (aqui ocorre a inferencia de tipos)
let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
let big: bigint = 10n;

// arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

// objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Luiz'
}

// funções
function soma(x: number, y: number): number { // infere a saida tambem
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
