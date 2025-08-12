export class Pessoa { //superclasse
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  // podemos pegar os valores dos atributos do construtor da superclasse e adicionar um novo atributo que receberá valor
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  // podemos fazer algo antes do que o metodo original da superclasse fazia
  // getNomeCompleto(): string {
  //   console.log('FAZENDA ALGO ANTES');
  //   return super.getNomeCompleto();
  // }

  // ou também retornar o retorno do metodo original com algo a mais
  getNomeCompleto(): string {
    console.log('FAZENDA ALGO ANTES');
    const result = super.getNomeCompleto();
    return result + ' teste';
  }
}

const aluno = new Aluno('Luiz', 'Miranda', 30, '000.000.000-00', '0001');

console.log(aluno);
