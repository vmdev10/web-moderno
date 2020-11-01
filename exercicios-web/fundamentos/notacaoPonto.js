// A notação ponto é usado para acessar os membros de um objeto ou de uma função
console.log(Math.ceil(6.8));

const obj1 = {}
obj1.name = 'Bola'

// obj1['name'] = 'Bola2'
console.log(obj1.name)

function Obj(nome) {
    this.name = nome // O 'this' junto com a notação ponto pode criar tanto funções como atributos que serão expostos para fora da função quando ela for instanciada
    this.exec = function() {
        console.log('Exec....')
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa')
console.log(obj2.name)
console.log(obj3.name)
obj3.exec()