interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

interface PessoaProtocolo2<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo3<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30
}

const aluno2: PessoaProtocolo2 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30
}

const aluno3: PessoaProtocolo3 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30
}
