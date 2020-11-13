function Pessoa(nome) {
  this.nome = nome; // Usado para possíveis alterações no nome

  this.imprimirNome = function () {
    console.log(`Meu nome é ${this.nome}`);
  };
}
const criarPessoa1 = new Pessoa("Vitória");
criarPessoa1.imprimirNome();
