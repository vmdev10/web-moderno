// Objeto "pessoa" aponta para um endereço de memória "X" onde estão armazenados os atributos
const pessoa = {nome: 'João'};
pessoa.nome = 'Pedro' // Ao fazer alterações nos atributos o valor da contante não muda, pois essa armazena o endereço de memória e não o valor propriamente dito.
console.log(pessoa)

// No caso de fazer uma NOVA ATRIBUIÇÃO a mesma constante (pessoa) o endereço de memória está sendo alterado para 'Y'
//pessoa = {nome: 'Ana'} // Erro!!

Object.freeze(pessoa) // Congelando o objeto pessoa, logo não poderá ser feito alterações nem na constante nem nos atributos
pessoa.name = 'Maria'
pessoa.end = 'Rua ABC' 
delete pessoa.nome

console.log(pessoa)
console.log(pessoa.nome)

// Ou
const pessoaConstante = Object.freeze({nome: 'Ana'})
console.log(pessoaConstante)