// no ts e js não é muito usual pq já trabalhamos em modulo

namespace MeuNamespace { // executa sem chamar
  // console.log(11111);

  export const nomeDoNamespace = 'Luiz';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('Luiz');
  console.log(pessoa);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Nome no outro namespace';
  }
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Luiz');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
