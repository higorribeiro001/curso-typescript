export class Pessoa { // um metodo estatico é aquele que pode ser chamado sem instanciar a classe, e não terá acesso ao metodo pela instancia
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static falaOi(): void {
    console.log('OI');
  }

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  // factore
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');
pessoa.cpf = '123.456.789-99'; // chamando o setter
console.log(pessoa.cpf);

Pessoa.falaOi();

const pessoa2 = Pessoa.criaPessoa('Maria', 'Miranda');
console.log(pessoa2);
