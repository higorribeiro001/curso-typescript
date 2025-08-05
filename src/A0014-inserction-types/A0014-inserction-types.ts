// é o &, tratado como uma interceção

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';

type Intersecao = AB & AC & AD; // a interceção será o A

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  sobrenome: 'Miranda'
}

console.log(pessoa);

export { pessoa };
