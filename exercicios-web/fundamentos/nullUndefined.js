let valor; // Variável declarada mas não inicializada
console.log(valor);

valor = null; //Ausência de valor (Variável não aponta para nenhum lugar na memória)
console.log(valor);

// console.log(valor.toString()); // Erro! (Não é possível acessar nenhuma propriedade de uma variável nulo ou indefined)

const produto = {}; // Undefined (Não está definido o preço dentro de produtos)
console.log(produto.name);

//console.log(produto.name.a) // Erro! (Cannot read property 'a' of undefined)

produto.preco = 3.5;
console.log(produto.preco);

delete produto.preco;
console.log(produto.preco);
