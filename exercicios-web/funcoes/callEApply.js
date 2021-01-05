/*
Os métodos call()e apply() são métodos JavaScript predefinidos.
Ambos podem ser usados ​​para chamar um método de objeto com outros objetos diferentes como argumento.
*/

const person1 = {
    fullName() {
        return this.firstName + ' ' + this.lastName
    }
}

const person2 = {
    firstName: 'Ana',
    lastName: 'Vitória'
}

const criandoNome = person1.fullName.call(person2);
console.log(criandoNome);

/*
No exemplo abaixo, ao chamar person1.fullName com person2 como argumento, 
thisfará referência a person2, mesmo que seja um método de person1:
*/
function getPreco(tax = 0,  currency = 'R$') {
    return `${currency} ${this.price * (1 - this.discount) * (1 + tax)}`
}

const produto = {
    name: 'Notebook',
    price: 4589,
    discount: 0.15,
    getPreco   
}
console.log(produto.getPreco())

const carro = {price: 49990, discount: 0.2}

console.log(produto.getPreco.call(carro))
console.log(getPreco.call(carro))
console.log(produto.getPreco.apply(carro))
console.log(getPreco.apply(carro))
console.log(getPreco.call(carro, 0.17,'U$'))
console.log(getPreco.apply(carro, [0.17, 'U$']))