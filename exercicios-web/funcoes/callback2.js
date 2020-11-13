const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem callback
const notasBaixas1 = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i]);
  }
}
console.log(notasBaixas1);

// Com callback
// Sempre que o evento (a cada elemento do array que a função filter percorrer) ocorrer
// A função que foi passado como critério vai ser executada
// Nesse caso irá retornar os elementos de um array que atendem à condição especificada pelo retorno da função
// para o array criado "notasBaixas2"
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7;
});
console.log(notasBaixas2);

const notasBaixas3 = notas.filter((nota) => nota < 7); // Recebe como parâmetro o elemento atual e retorna um true ou false
console.log(notasBaixas3);

const notaMenorQue7 = (nota) => nota < 7;
const notasBaixas4 = notas.filter(notaMenorQue7);
console.log(notasBaixas4);