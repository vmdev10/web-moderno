function classificacaoTriangulo(a = 1, b = 1, c = 1) {
  if (a <= b + c && b <= a + c && c <= a + b) {
    if (a === b && b === c) {
      const trianguloEquilatero = "É um triângulo equilátero";
      return trianguloEquilatero;
    } else if (a === b || b === c || c === a) {
      const trianguloIsosceles = "É um triângulo isósceles";
      return trianguloIsosceles;
    } else {
      const trianguloEscaleno = "É um triângulo escaleno";
      return trianguloEscaleno;
    }
  }
  const erro = "Não é um triângulo";
  return erro;
}

console.log(classificacaoTriangulo(3, 5, 7));
console.log(classificacaoTriangulo(60, 60, 60));
console.log(classificacaoTriangulo(10, 10, 12));
console.log(classificacaoTriangulo(8, 2, 5));
console.log(classificacaoTriangulo());
