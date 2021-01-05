const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
console.log(fruits.copyWithin(2, 0, 2));

// Método sort()
//  Clssifica um array em ordem alfabética
const objects = ["Faca", "Bola", "Copo", "Cadeira", "Lápis", "Quadro"];
console.log(objects.sort());

// Método reverse()
//  Inverte os elementos de uma matriz, podendo usa-lo para classificar uma matriz em ordem decrescente
objects.sort();
objects.reverse();
console.log(objects);

/* Classificação NÚMERICA
    Por padrão, o sort classifica os valores como strings.
    No entanto, se os valores númericos forem tratados como strings "25" é maior do que "100", visto que o 2 vem depois do 1
    Isso é corrigido fornecendo a função de comparação
*/

const points = [40, 100, 1, 5, 25, 10];
points.sort();
console.log(points);

points.sort((a, b) => {
  return a - b;
});
console.log(points);

//Se o resultado for negativo a é classificado antes b.

//Se o resultado for positivo b é classificado antes a.

//Se o resultado for 0, nenhuma alteração será feita na ordem de classificação dos dois valores.