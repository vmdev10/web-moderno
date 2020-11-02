// A variável do tipo let respeita 3 escopos:
    //Escopo global, visível em toda sua aplicação
    //Escopo de função, visível apenas dentro do bloco
    //Escopo de bloco (Qualquer tipo de bloco), só é visível dentro dele

let numero = 1
{
    let numero = 2
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)