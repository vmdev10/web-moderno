const pai = {nome: 'Pedro', corDoCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corDoCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true},
    corDoCabelo: {value: 'loiro', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' // writable: false
console.log(`${filha2.nome} tem a cor do cabelo ${filha2.corDoCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// A função hasOwnProperty (Mostra atributos próprios do objeto)
for(let key in filha1) {
    filha1.hasOwnProperty(key) ?
    console.log(key) : console.log(`${key} veio por herança`)
}