function getInteiroAleatorioEntre(min, max) { // Escolher números aleatórios entre o valor mín e máx
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

// While é mais usado para uma quantidade indeterminada de repetições
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')