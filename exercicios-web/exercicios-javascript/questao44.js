function classificaMes(numero) {
    switch(numero) {
        case 1:
            return 'Janeiro'
        case 2:
            return 'Fevereiro'
        case 3:
            return 'Março'
        case 4:
            return 'Abril'
        case 5:
            return 'Maio'
        case 6:
            return 'Junho'
        case 7:
            return 'Julho'
        case 8:
            return 'Agosto'
        case 9:
            return 'Setembro'
        case 10:
            return 'Outubro'
        case 11:
            return 'Novembro'
        case 12:
            return 'Dezembro'
        default:
            return 'Valor inválido'
    }
}

console.log(classificaMes(0));
console.log(classificaMes(1));
console.log(classificaMes(2));
console.log(classificaMes(3));
console.log(classificaMes(4));
console.log(classificaMes(5));
console.log(classificaMes(6));
console.log(classificaMes(7));
console.log(classificaMes(8));
console.log(classificaMes(9));
console.log(classificaMes(10));
console.log(classificaMes(11));
console.log(classificaMes(12));