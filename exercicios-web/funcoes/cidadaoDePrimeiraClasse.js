// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar uma função de forma literal:
function funcao1() {}

// Armazenar em uma Variável
const funcao2 = function () {};

// Armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  funcao1,
  funcao2,
];
console.log(array[0](2, 3));

// Armazenar em um atributo de objeto
const objeto = {};
objeto.falar = function () {
  return "Opa";
};
console.log(objeto.falar());

// Passar função com parâmetro de outra função
function run(fun) {
  fun();
}
run(function () {
  console.log("Executando...");
});

// Uma função pode retornar/conter outra função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}
soma(2, 3)(4);
//ou
soma2 = soma(2, 3);
soma2(4);
