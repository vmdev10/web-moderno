function operacoesAritmeticas(x = 1, y = 1) {
  const soma = x + y;
  const subtracao = x - y;
  const multiplicacao = x * y;
  const divisao = x / y;

  return `Soma = ${soma} Subtração = ${subtracao} Multiplicação = ${multiplicacao} Divisão = ${divisao}`;
}
console.log(operacoesAritmeticas(5, 3));
