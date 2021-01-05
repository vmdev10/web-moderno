// Método antigo
let exponenciacao = (base, expoente = 2) => {return Math.pow(base, expoente)}

// Método novo
exponenciacao = (base, expoente= 2) => {return base ** expoente}

console.log(exponenciacao(2, 2))
console.log(exponenciacao(3))