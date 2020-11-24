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

const resultado = carrinho.map(converterParaObjeto).map(preco);
console.log(resultado);
