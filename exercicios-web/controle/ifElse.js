const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
//imprimirResultado('Epa!') // CUIDADO! - Vai ser comparado a condição, como não a satisfaz, retornará falso e assim o bloco de instruções executado será o else.
