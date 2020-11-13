// Sem função factory
const prod1 = {
    nome: '...',
    preço: 45
}

const prod2 = {
    nome: '...',
    preço: 324
}

// Com função factory de parâmetros fixos
function criarPessoa() {
    return {
        name: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())