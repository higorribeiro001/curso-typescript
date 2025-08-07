// usado para quando não retornar nada
// pode ser usado em uma situação de laço infinito
// pode ser usado para lançamento de erros

export function criaErro() : never {
  throw new Error ('Erro qualquer'); // não retornada nada, mas cria um erro que pode parar a aplicação
}
