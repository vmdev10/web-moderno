function Pessoa() {
    this.idade = 0 //A variável idade amarrada ao this vai estar disponível na página 


    const self = this // Armazenar o this em uma constante torna-o seu valor fixo // self contexto léxico de Pessoa, então o this aponta sempre pra Pessoa.
    // A função setInterval dispara outra função emm um determinado intervalo de tempo
    setInterval( function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this) */, 1000)
}
new Pessoa