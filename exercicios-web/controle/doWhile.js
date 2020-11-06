function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = -1;

do {
  // Pelo menos a primeira execução do while é garantida, visto que a condição do while só é verificada após ela
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}.`);
} while (opcao != -1);

console.log("Até a próxima!");
