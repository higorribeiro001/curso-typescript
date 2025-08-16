// Encadeamento opcional e Operador de coalescência nula
// é bom para evitar ifs no codigo

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
}

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString()); // colocamos a interrogação aqui para perguntar se vamos chamar o metodo ou não, isso é conhecido como encadeamento opcional

// coalescência nula
console.log(documento.data?.toDateString() ?? 'Ixi, não existe data.');
