// Arguments é um array disponibilizado pela função que permite o resgate de parâmetros definidos posteriormente.
// Isso torna possível o resgate de dados nos parâmetros que foram definidos na chamada da função e operções com eles.
// Quando nenhum parâmetro é passado o array está vazio.

function soma() {
  let soma = 0;
  for (i in arguments) {
    // A partir de 'i' é possível acessar qualquer índice do elemento que foi passado como argumentos pra essa função
    soma += arguments[i];
  }
  return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));

console.log(soma(1.1, 2.2, "teste"));
console.log(soma("a", "b", "c"));
