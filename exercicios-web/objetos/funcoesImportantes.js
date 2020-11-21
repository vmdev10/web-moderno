const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};

// Função para retornar todas as chaves de um objeto
console.log(Object.keys(pessoa));

// Função para retorar todos os valores de um objeto
console.log(Object.values(pessoa));

// Função para retornar um array com seus sub-arrays que são o registro dos pares chave e valor
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, "dataDeNascimento", {
  enumerable: true, // Para listar a propriedade
  writable: false, // Não permitir alterações no valor da propriedade
  value: "01/01/2019",
});
console.log(pessoa);
pessoa.dataDeNascimento = "01/01/2017";
console.log(pessoa.dataDeNascimento); // writable: false

//Object.assign (ECMAScript 2015)
const destino = { a: 1 };
const objeto1 = { b: 2 };
const objeto2 = { c: 3, a: 4 };

const objetoFinal = Object.assign(destino, objeto1, objeto2); // Vai haver uma concatenação de objetos, sendo que, com a mesma nomeclatura, os últimos sobrescrevem os primeiros
console.log(objetoFinal);
