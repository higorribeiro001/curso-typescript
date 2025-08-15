export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(1, 5);

type Pessoa = { nome: string };
type Animal = { cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  if ('nome' in obj) console.log(obj.nome); // type guard
  if (obj instanceof Aluno) console.log(obj.nome); // type guard
}

mostraNome(new Aluno('João'));


