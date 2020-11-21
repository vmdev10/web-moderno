// Usando a notação literal
const objeto1 = {};
console.log(objeto1);

// Object em JS
console.log(typeof Object, typeof new Object());

const objeto2 = new Object();
console.log(objeto2);

// Funções construtoras
// "preco" e "desconto" não podem ser alterados a partir da criação da função, pois então encapsulados, isto é, visiveis apenas dentro do escopo da função
// Logo não é possível acessa-los a partir da propriedade "Produto.preco" ou "Produto.desconto"// Apenas "Produto.nome" pode ser aterado.
function Produto(nome, preco, desconto) {
  this.nome = nome; // Exportando a variável para fora da função e deixando ela visível na página para quando for instanciada
  this.getPrecoComDesconto = () => {
    return preco * (1 - desconto);
  };
}

const produto1 = new Produto('Caneca', 7.99, 0.15)
console.log(produto1.getPrecoComDesconto().toFixed(2))
const produto2 = new Produto('Notebook', 2998.99, 0.25)
console.log(produto2.getPrecoComDesconto().toFixed(2))

console.log(produto1.nome)
produto1.nome = 'Quadro'
console.log(produto1.nome)

// Função factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30 * (30 - faltas))
    }
  }
}

const funcionario1 = criarFuncionario('Ana', 11400, 1);
const funcionario2 = criarFuncionario('Paulo', 7980, 4);
console.log(funcionario1.getSalario(), funcionario2.getSalario());

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Um função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)