// São variáveis que contém uma coleção de pares chave/valor

const obj1 = new Boolean()
console.log(obj1)

const produto = new Object(); // Uma das maneiras de criar um objeto JavaScript
produto.nome = "cadeira";
produto["marca do produto"] = "Generica";
produto.preco = 220;

console.log(produto);

// Deletando atributos
delete produto.preco;
delete produto["marca do produto"];

console.log(produto);

// Outra maneira de criação de objetos
const carro = {
  modelo: "A4",
  valor: 89000,
  proprietario: {
    nome: "Raul",
    idade: 45,
    endereco: {
      logradouro: "Rua ABC",
      numero: 370,
    },
  },
  condutores: [
    {
      nome: "Junior",
      idade: 19,
    },
    {
      nome: "Ana",
      idade: 42,
    },
  ],
  calcularValorSeguro: function () {
    //....
  },
};

// Formas de acessar um objeto
carro.proprietario.endereco.numero = 1000;
carro["proprietario"]["endereco"]["logradouro"] = "Avenida Gigante";

console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;

console.log(carro);
console.log(carro.condutores);
// console.log(carro.condutores.length) // Erro
