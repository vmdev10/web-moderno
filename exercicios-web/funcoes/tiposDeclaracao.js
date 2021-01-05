/* Function declaration
  As funções declaradas não são executadas imediatamente.
  Eles são "salvos para uso posterior" e serão executados mais tarde, quando forem invocados (chamados).
  Os pontos-e-vírgulas são usados ​​para separar instruções JavaScript executáveis.
  Visto que uma declaração de função não é uma instrução executável, não é comum terminá-la com um ponto-e-vírgula.
*/
console.log(soma(7, 6));

function soma(x, y) {
  return x + y;
}

/* Function expression
  Uma expressão de função armazenada em uma variável
  Depois que uma expressão de função foi armazenada em uma variável, 
  a variável pode ser usada como uma função
  A função acima termina com um ponto-e-vírgula porque é parte de uma instrução executável.
 */
const subtracao = function (x, y) {
  return x - y;
};
console.log(subtracao(5, 10));

// Named Function expression
const produto = function produto(x, y) {
  return x * y;
};
console.log(produto(5, 8));
