console.log(typeof Object);
console.log(typeof new Object()); // Instanciando um objeto a partir de uma função

const cliente = function () {};
console.log(typeof cliente);
console.log(typeof new cliente()); // Instanciando um objeto a partir de uma função

class Produto {}
console.log(typeof Produto);
console.log(typeof new Produto()); // Instanciando um objeto a partir de uma função