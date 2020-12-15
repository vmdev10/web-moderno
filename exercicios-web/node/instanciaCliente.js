// O contador A e B compartilham do mesmo objeto
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// Como se trata de uma função factory, é necessário chamar a função
// São contadores independentes, porque a fatory gera novos objetos
const contadorC = require('./instanciaNova') ()
const contadorD = require('./instanciaNova') ()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) // Cash

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)