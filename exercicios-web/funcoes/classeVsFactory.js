// Na classe o this é necessário
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const criarPessoa1 = new Pessoa('Ana')
criarPessoa1.falar()

// Na função factory o this NÃO é necessário
const pessoa2 = (nome) => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
        }
    }

const criarPessoa2 = pessoa2('Vitória')
criarPessoa2.falar()