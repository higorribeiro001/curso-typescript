// implementando type alias

type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
}

export class Pessoa implements TipoPessoa { // pode implementar mais de um tipo, basta separar por virgulas
  constructor(
    public nome: string,
    public sobrenome: string
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda');
console.log(pessoa.nomeCompleto());
