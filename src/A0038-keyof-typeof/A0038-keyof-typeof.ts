type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
}

function traduzirCor(
  cor: 'vermelho' | 'verde' | 'azul',
  cores: typeof coresObj // atribui por inferencia o tipo
) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));
