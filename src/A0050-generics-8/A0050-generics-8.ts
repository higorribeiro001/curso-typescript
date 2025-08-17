// Utility types - Generics padrão no Typescript

// Record
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30
}

type PessoaProtocol = {
  nome?: string,
  sobrenome?: string,
  idade?: number
};

// Required - transforma tudo que é opcional em obrigatório
type PessoaRequired = Required<PessoaProtocol>;

// Partial - tudo fica como opcional
type PessoaPartial = Partial<PessoaProtocol>;

// Readonly
type PessoaReadonly = Readonly<PessoaProtocol>;

// Pick - escolher as chaves que preferir
type PessoaPick = Pick<PessoaProtocol, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30
}

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TipoExclude = Exclude<ABC, CDE>; // computa todos os tipos que estão em ABC que não estão em CDE
type TipoExtract = Extract<ABC, CDE>; // computa todos os tipos que estão em ABC que podem ser atribuidos aos tipos de CDE

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = {
  id: string;
  nome: string;
  idade: number;
};

const accountMongo: AccountMongo = {
  _id: 'asdfjsoasdofj',
  nome: 'Luiz',
  idade: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id }; // migrando o _id para id
}

const accountApi = mapAccount(accountMongo);

// fazer tudo isso de maneira mais automatica

type AccountApi2 = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string
};

const accountMongo2: AccountMongo = {
  _id: 'asdfjsoasdofj',
  nome: 'Luiz',
  idade: 30,
};

// Module mode
export default 1;
