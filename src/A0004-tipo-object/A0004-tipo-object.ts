// const objectA: Record<string, unknown> = {
//   chaveA: 'Valor A',
//   chaveB: 'Valor B',
// };

// ouu

const objectA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; // é uma signature, funciona como o Record
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// outra maneira
// const objectA: {
//   readonly chaveA: string; // não poderá alterar o valor da chave
//   readonly chaveB: string;
// } = {
//   chaveA: 'Valor A',
//   chaveB: 'Valor B',
// };

objectA.chaveA = 'Outro valor';
objectA.chaveC = 'Nova chave';
objectA.chaveD = 'Nova chave';
