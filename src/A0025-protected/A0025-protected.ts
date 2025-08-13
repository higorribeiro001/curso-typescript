export class Empresa {
  public readonly nome: string; // public não é necessário
  protected readonly colaboradores: Colaborador[] = []
  private readonly cnpj: string;

  public construtor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaboradores(colaborador: Colaborador): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  public getNome(): string {
    return this.nome;
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11')
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Higor', 'Araujo');
console.log(empresa1);
empresa1.adicionaColaborador(colaborador1);
empresa1.popColaborador();
// empresa1.mostrarColaboradores();
