// Atribuição por referência
// Acontece quando é trabalhado com estrutura de dados mais complexas como, objetos e funções

// Nesse caso a constante 'a' não recebe o valor objeto, mas sim o endereço da memória onde será armazenado esse objeto.
const a = {};
a.name = "Teste";

// Quando se é copiado o endereço da memória da constante 'a' para a constante 'b', é igualado o endereço para ambas.
// Dessa forma, 'a' passa a ter a referência do objeto e 'b' passa a ter a referência do objeto
// Logo quando se é feita uma alteração no valor de uma das constantes (Nesse caso, 'b'), todas as que estão direcionadas para o mesmo local da memória
// Também sofrerão a alteração (nesse caso a constante 'a').
const b = a;
b.name = "Teste02";

console.log(b.name);
console.log(a.name);

console.log();

// Atribuição por valores
//Acontece quando é trabalhado com os tipos básicos/primitivos da linguagem, como inteiros, booleans e etc.

// Nesse outro caso, a váriavel 'c' está recebendo valor propriamente dito, e não o endereço de memória como na atribuição por referência.
// Quando a váriavel 'd' recebe o valor 'c', está sendo feito uma copia do valor
// De forma que 'd' tenha o seu valor e 'c' tenha o seu valor, isto é são independentes
// Isso significa que qualquer alteração do valor em uma das váriaveis (nesse caso em 'd') não é afetado o valor da outra (como em 'c')
let c = 3;
let d = c;
d++;

console.log(d);
console.log(c);