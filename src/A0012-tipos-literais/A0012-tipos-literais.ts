// usar valores como tipo

let x = 10; // valor inferido do tipo number, então o tipo será number e só poderá assumir valores numéricos
const y = 10; // este é um tipo literal, por ser uma contante o seu valor não pode ser alterado, seu subtipo é number

let a: 100 = 100; // a só poderá ser atribuído ao valor de 100
let b = 100 as const; // tipo literal

const pessoa = {
  nome: 'Luiz' as const, // só poderá assumir o valor de 'Luiz'
  sobrenome: 'Miranda'
};

export function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
} // a saida será string, mas quero que a saida seja uma das 3 cores do Enum, que são tipos literais
