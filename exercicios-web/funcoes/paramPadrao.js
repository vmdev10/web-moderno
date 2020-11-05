// Estratégia 1 para gerar valor padrão -- Mais usada para variáveis dentro de uma função, para definir um valor padrão para a variável
function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0));

// Etratégia 2, 3 e 4 para geraar valor padrão
function soma2(a, b, c) {
  a = a !== undefined ? a : 1; // Se a for diferente de undefined, a variável a recebe o valor fornecido(a), se não recebe o valor (1)
  b = 1 in arguments ? b : 1;
  c = isNaN(c) ? 1 : c; // Se o valor c não for um número ele recebe o valor padrão (1) se não recebe seu valor definido (c)
  return a + b + c;
}
