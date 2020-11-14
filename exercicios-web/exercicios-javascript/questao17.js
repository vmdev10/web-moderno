const reajusteDoSalario = function (
  planoDeTrabalho = "A",
  salarioAtual = 1045.0,
  moeda = "R$"
) {
  const planoDoFuncionario = planoDeTrabalho.toUpperCase();
  let novoSalario = 0;
  switch (planoDoFuncionario) {
    case "A":
      novoSalario = (salarioAtual * 1.1).toFixed(2);
      console.log(`O novo salário do funcionário é ${moeda}${novoSalario.replace(".", ",")}`);
      break;
    case "B":
      novoSalario = (salarioAtual * 1.15).toFixed(2);
      console.log(`O novo salário do funcionário é ${moeda}${novoSalario.replace(".", ",")}`);
      break;
    case "C":
      novoSalario = (salarioAtual * 1.2).toFixed(2);
      console.log(`O novo salário do funcionário é ${moeda}${novoSalario.replace(".", ",")}`);
      break;
    default:
        console.log(`O plano informado é inválido`)
  }
};

reajusteDoSalario();
reajusteDoSalario("B");
reajusteDoSalario("C");
reajusteDoSalario("D");
