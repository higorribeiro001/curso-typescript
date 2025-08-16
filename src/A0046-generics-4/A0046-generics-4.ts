// restrições com generics

type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K]; // o extends está sendo usado como restrição para que K possa ser uma chave de O, ou seja, K é no maximo uma chave de O

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina 1', 'Vacina 2'],
  idade: 10
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor, obterChave(animal, 'idade'));
