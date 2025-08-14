// declaration merging
interface Pessoa {
  nome: string;
}

// interface Pessoa { // podemos ter duas interfaces com o mesmo nome, será feito um merge entre as duas
//   readonly sobrenome: string;
// }

const pessoa: Pessoa = {
  nome: 'Luiz',
  // sobrenome: 'Miranda',
  enderecos: ['Avenida Brasil']
}

// pessoa.sobrenome = ''; // não pode atribuir por conta do readonly

interface Pessoa { // podemos ter duas interfaces com o mesmo nome, será feito um merge entre as duas
  readonly enderecos: string[];
}

pessoa.enderecos.push('Rua nova'); // podemos adicionar no array mesmo sendo readonly
