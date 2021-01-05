function classificacaoTriangulo(a = 1, b = 1, c = 1) {
  if (a <= b + c && b <= a + c && c <= a + b) {
    if (a === b && b === c) {
      return "É um triângulo equilátero";
    } else if (a === b || b === c || c === a) {
      return "É um triângulo isósceles";
    } else {
      return "É um triângulo escaleno";
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
