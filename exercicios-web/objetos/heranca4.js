console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
// Se são uma function todos tem a função protorype em comum

String.prototype.reverse = function() {
    // O this acessa a string
    return this.split('').reverse().join() // O join vai concatenar as string novamente
}
console.log('Cod3er cursos'.reverse())
console.log('airótiV anA'.reverse())

Array.prototype.first = function() {
    return this[0]
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

// O atibuto toString já existe
String.prototype.toString = function() {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.toString())