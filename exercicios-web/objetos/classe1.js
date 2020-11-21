class Release {
  constructor(name = "Genérico", value = 0) {
    // A função que será executada ao ser instanciada a classe
    this.name = name;
    this.value = value;
  }
}

class FinancialCicle {
    constructor(month, year) {
        this.month = month;
        this.year = year;
        this.release = []

    }
    addRelease(...release) {
        release.forEach(l => this.release.push(l))
    }
}

const salario = new Release('Salario', 45000)
const contaDeLuz = new Release('Luz', -220)

const conta = new FinancialCicle('March', 2020)
console.log(conta.addRelease(salario, contaDeLuz))