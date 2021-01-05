function valorEmDinheiro(nota1 = 0, nota2 = 0, moeda = "R$") {
  const somaDasNotas = (nota1 + nota2).toFixed(2);
  const valorEmDinheiro = `${moeda}${somaDasNotas.replace(".", ",")}`;

  return valorEmDinheiro;
};

console.log(valorEmDinheiro(0.1, 0.2));
