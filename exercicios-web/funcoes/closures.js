// Closure é o escopo criado quando uma função é declarada
// Permite a função acessar e manipular variáveis externas a ela.

const x = 'Global' //Contexto léxico 1

function fora() { // contexto léxico 1
    const x = 'Local' //contexto léxico 2 - function fora() 
    function dentro() { // contexto léxico 2 - function fora()
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())