function compararValores(numero1, numero2) {
    if(typeof numero1 === typeof numero2){
        return numero1 >= numero2
    } 
    return false
}

console.log(compararValores(0, 0));
console.log(compararValores(0, "0"));
console.log(compararValores("5", 1));
console.log(compararValores(5, 1));
