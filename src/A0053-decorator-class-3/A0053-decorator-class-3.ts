// decorator factories (fabrica de decoradores)

function inverteNomeECor(param1: string, param2: string) {
  // Closure
  return function <T extends new (...args: any[]) => {}>(target: T): T { //new pra dize que se trata de um construtor de classe
    console.log('Sou o decorador e recebi', target)

    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]); // o reverse reverte o array e o join junta de novo
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  }
}



@inverteNomeECor('Valor1', 'Valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

// const animal = new Animal('Luiz', 'roxo');
// console.log(animal);
