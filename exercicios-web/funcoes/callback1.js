// Uma função callback ocorre quando uma função é passada com parâmetro para outra função
// e essa função é chamada de volta quando um evento acontecer

const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir); // Para cada elemento do array será disparado a função imprimir
fabricantes.forEach((fabricante) => console.log(fabricante)); // ForEach executa a ação especificada para cada elemento em uma matriz.
