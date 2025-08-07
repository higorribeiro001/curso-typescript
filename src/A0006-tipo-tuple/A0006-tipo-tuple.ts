const dadosCliente: [number, string] = [1, 'Luiz']; // tupla é um tipo imutável
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Miranda']; // neste caso, o primeiro pode ser number, o segundo uma string e o restante tudo strings formando um array

dadosCliente[0] = 100;
dadosCliente[1] = 'Carlos';
