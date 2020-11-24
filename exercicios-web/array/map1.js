const nums = [1, 2, 3, 4, 5];

// MAP - For com propósito
// Mapear um array e retornar como resultado um novo array, do mesmo tamanho, mas com os dados modificados

let resultado = nums.map(function (e) {
  return e * 2;
});
console.log(resultado);

// Map encadeado

const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const converterParaDinheiro = (e) => `R$ ${e.toFixed(2).replace(".", ",")}`;

resultado = nums.map(soma10).map(triplo).map(converterParaDinheiro);
console.log(resultado);
