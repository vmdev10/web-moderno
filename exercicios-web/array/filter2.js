Array.prototype.filter2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return newArray.push(this[i]);
    }
  }
  return newArray;
};
const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de vidro", preco: 12.49, fragil: true },
  { nome: "Copo de plástico", preco: 18.99, fragil: false },
];

console.log(
  produtos.filter(function (elemento) {
    return elemento.fragil === false;
  })
);

const produtosFrageis = function (atributo) {
  return atributo.fragil;
};

const acimaDe500 = function (atributo) {
  return atributo.preco > 500.0;
};

console.log(produtos.filter2(produtosFrageis).filter2(acimaDe500));
