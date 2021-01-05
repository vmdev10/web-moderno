function calcularSalario(hora, valor) {
    let horasTrabalhadasNoMes = hora;
    let valorPorHora = valor;
    const calcularSalario = horasTrabalhadasNoMes * valorPorHora;

    return `Salário igual a R$ ${calcularSalario}`
}

console.log(calcularSalario(150, 40.5))