function inverso(valor) {
    if(valor === true || valor === false) {
        return !valor
    } else if(valor > 0) {
        return `-${valor}`
    } else {return Math.abs(valor)}

}
console.log(inverso(true));
console.log(inverso(false));
console.log(inverso(5));
console.log(inverso(-5));
