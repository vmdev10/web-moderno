const calculadoraBasica = function (valor1 = 1, operacao = '+', valor2 = 1) {
  switch (operacao) {
    case "+":
      const soma = valor1 + valor2;
      console.log(`A soma entre ${valor1} e ${valor2} é igual a ${soma}`);
      break;
    case "-":
      const subtracao = valor1 - valor2;
      console.log(
        `A subtracao entre ${valor1} e ${valor2} é igual a ${subtracao}`
      );
      break;
    case "*":
      const multiplicacao = valor1 * valor2;
      console.log(
        `A multiplicação entre ${valor1} e ${valor2} é igual a ${multiplicacao}`
      );
      break;
    case "/":
      const divisao = valor1 / valor2;
      console.log(`A divisão entre ${valor1} e ${valor2} é igual a ${divisao}`);
      break;
    default:
      console.log(`Operação inválida!`);
  }
};
calculadoraBasica()
calculadoraBasica(5, "*", 3);
calculadoraBasica(17, "+", 3);
calculadoraBasica(256, "/", 16);
calculadoraBasica(8, "-", 9);

