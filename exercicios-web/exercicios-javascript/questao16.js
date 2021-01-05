const calculadoraBasica = function (valor1 = 1, operacao = "+", valor2 = 1) {
  switch (operacao) {
    case "+":
      const soma = valor1 + valor2;
      return `A soma entre ${valor1} e ${valor2} é igual a ${soma}`;
    case "-":
      const subtracao = valor1 - valor2;
      return `A subtracao entre ${valor1} e ${valor2} é igual a ${subtracao}`;

    case "*":
      const multiplicacao = valor1 * valor2;
      return `A multiplicação entre ${valor1} e ${valor2} é igual a ${multiplicacao}`;

    case "/":
      const divisao = valor1 / valor2;
      return `A divisão entre ${valor1} e ${valor2} é igual a ${divisao}`;

    default:
      return `Operação inválida!`;
  }
};
console.log(calculadoraBasica());
console.log(calculadoraBasica(5, "*", 3));
console.log(calculadoraBasica(17, "+", 3));
console.log(calculadoraBasica(256, "/", 16));
console.log(calculadoraBasica(8, "-", 9));
