const soma = function (x, y) {
  return x + y;
};
console.log(soma(2, 3));

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};
imprimirResultado(7, 4);
imprimirResultado(7, 4, soma)
imprimirResultado(7, 4, function(x, y) {
    return x - y
})
imprimirResultado(7, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}
pessoa.falar()