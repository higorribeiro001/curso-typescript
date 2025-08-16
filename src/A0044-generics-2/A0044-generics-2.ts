type MeuTipo = number;

const arrayNumeros: Array<number> = [1, 2, 3, 4];
console.log(arrayNumeros);

async function promiseAsync() {
  return 1;
}

function minhaPromise(): Promise<MeuTipo> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    });
  })
}

promiseAsync().then((resultado) => console.log(resultado + 1));
promiseAsync().then((resultado) => console.log(resultado + 1));
