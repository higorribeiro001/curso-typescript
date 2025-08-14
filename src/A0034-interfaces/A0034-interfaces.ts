interface TipoPessoa {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
}

interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  nome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

// podemos extender uma interface
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 { // pode implementar mais de um tipo, basta separar por virgulas
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
