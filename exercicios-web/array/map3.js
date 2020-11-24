Array.prototype.map2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.9}',
  '{"nome": "Kit de lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
];

const converterParaObjeto = (elemento) => {
  return JSON.parse(elemento);
};
const preco = (atributo) => {
  return atributo.preco;
};

const resultado = carrinho.map2(converterParaObjeto).map2(preco);
console.log(resultado);
