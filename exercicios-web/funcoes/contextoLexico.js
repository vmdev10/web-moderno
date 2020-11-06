const valor = 'Global' // contexto léxico 1 - arquivo node

function minhaFuncao () { //Contexto léxico 1 - arquivo node
    console.log(valor)
}

function exec() {
    const valor = 'Local' // Contexto léxico 2 - function exec()
    minhaFuncao()
}
exec()