let stringDePontos = ''
const numeroDeJogos = parseInt(prompt('Qual o número de jogos'));

for(let i = 0; i < numeroDeJogos; i++) {
    const pontosDaPartida = parseInt(prompt('Qual a pontuação do jogo?'))
    stringDePontos += pontosDaPartida + " "
}
function compararPontos(stringDePontos) {
    arrayDePontos = stringDePontos.split(' ').trim()
    console.log(arrayDePontos)
}
compararPontos(stringDePontos)