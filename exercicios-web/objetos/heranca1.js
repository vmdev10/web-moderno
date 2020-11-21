const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) // O atributo .prototype está presente apenas em funções
console.log(ferrari.__proto__) // O atributo __proto__ é por padrão de um objeto criado na sua forma literal ou  por um new Object
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof MeuObjeto, typeof Object)
console.log(MeuObjeto.prototype, Object.prototype)// O atributo .prototype está presente apenas em funções