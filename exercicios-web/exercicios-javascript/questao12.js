function fatorial(numeroInteiro = 1) {
    let numeroInicial = numeroInteiro;
    let fatorial = 1;
    for(numeroInicial; numeroInicial >= 1; numeroInicial--) {
        fatorial *= numeroInicial;
    }
    
    return `O fatorial de ${numeroInteiro} é ${fatorial}`;
} 

console.log(fatorial(5))
console.log(fatorial())
console.log(fatorial(7))
console.log(fatorial(3))
console.log(fatorial(10))