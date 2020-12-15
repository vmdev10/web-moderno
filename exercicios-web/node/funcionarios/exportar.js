const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulher = function(func) {return func.genero === 'F'}
const chinesa = function(func) {return func.pais === 'China'}
const menorSalario = function(func, funcAtual) {return func.salario < funcAtual.salario ? func : funcAtual}

axios.get(url).then(responde => {
    const funcionarios = responde.data

    const funcionarioRequerido = funcionarios
    .filter(mulher)
    .filter(chinesa)
    .reduce(menorSalario)
    
    console.log(funcionarioRequerido)
})