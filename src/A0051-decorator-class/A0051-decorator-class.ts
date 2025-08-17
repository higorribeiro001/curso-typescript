// é um objeto impostor, ele finge ser um objeto, mas no meio do caminho ele pode decorar o seu objeto, ou seja, ele pode observar o que seu objeto está fazendo ou modificar ou substituir por completo

// export class Animal {
//   constructor(public nome: string, public cor: string) {}
// }

// // function decorator<T>(target: T): T {
// //   // console.log('OIE... do DECORATOR'); // ou seja, com o decorator posso fazer algo antes de entregar o objeto
// //   return target;
// // }

// function decorator<T extends new (...args: any[]) => {}>(target: T): T { //new pra dize que se trata de um construtor de classe
//   return class extends target {
//     cor: string;
//     nome: string;

//     constructor(...args: any[]) {
//       super(...args);
//       this.nome = this.inverte(args[0]);
//       this.cor = this.inverte(args[1]); // o reverse reverte o array e o join junta de novo
//     }

//     inverte(valor: string): string {
//       return valor.split('').reverse().join('');
//     }
//   };
// }

// const AnimalDecorated = decorator(Animal);
// const animal = new AnimalDecorated('Luiz', 'roxo');
// console.log(animal);

// outra forma de chamar o decorator
@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => {}>(target: T): T { //new pra dize que se trata de um construtor de classe
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]); // o reverse reverte o array e o join junta de novo
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

const animal = new Animal('Luiz', 'roxo');
console.log(animal);
