function divisao(dividendo = 0, divisor = 1) {
  const quociente = Math.round(dividendo / divisor);
  const resto = dividendo % divisor;

  console.log(`${quociente} ${resto}`);
}
divisao(10, 2);
divisao(0, 1);
divisao(56, 13);
divisao(11, 4)