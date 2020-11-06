/*
Função construtora
    Permite criar/instanciar objetos a partit de uma função
    Os atributos podem ser criados de forma privada ou pública

Para criar um atributo privado, basta declara-lo dentro de uma váriavel com a palavra-chave let ou const(Caso seja uma constante) dentro da função
    Isso vai fazer com que o atributo pertença APENAS ao escopo da função, logo não será possível acessa-lo diretamente
Para criar um atributo público basta declara-lo com this
*/

function Carro(velocidadeMaxima = 200, delta = 5) {
  //Atributo privado
  let velocidadeAtual = 0; // Não será possível acessa-lo diretamente a partir do 'Carro.velocidadeatual'

  // Método público
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };
  // Método público
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}
const uno = new Carro(); // Instanciei a minha função construtora -> criei o objeto uno que recebe os atributos/métodos da função Carro
uno.acelerar(); // acessei o método acelerar para executar as instruções dentro dele
console.log(uno.getVelocidadeAtual()); // acessei o outro método do objeto 'getVelocidadeAtual' que retorna o valor da velocidadeAtual
console.log(typeof uno);

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

const tesla = new Carro(100, 24);
tesla.acelerar();
tesla.acelerar();
tesla.acelerar();
tesla.acelerar();
tesla.acelerar();
console.log(tesla.getVelocidadeAtual());
