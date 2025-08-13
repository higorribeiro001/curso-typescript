export class Pessoa { //superclasse
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf; // podemos chamar o setter antes (no caso aqui)
  }

  // jeito antigo

  // getNome(): string { // getter
  //   return this.nome;
  // }

  // getIdade(): number {
  //   return this.idade;
  // }

  // setCpf(valor: string): void {
  //   this.cpf = valor;
  // }

  // getCpf(): string {
  //   return this.cpf.replace(/\D/g, ''); // traz sem os simbolos
  // }

  // getNomeCompleto(): string {
  //   return this.nome + ' ' + this.sobrenome;
  // }

  // jeito atual
  set cpf(valor: string) { // irá se comportar como um atributo da classe
    this._cpf = valor;
  }

  get cpf(): string { // irá se comportar como um atributo da classe
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');
pessoa.cpf = '123.456.789-99'; // chamando o setter
console.log(pessoa.cpf);
