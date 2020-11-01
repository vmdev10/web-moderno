// Par nome/valor
const introductions = "Olá"; // Contexto léxico 1 - Diz respeito ao contexto/local onde o par nome/valor foi definido (Nesse caso no escopo global do aarquivo 'parNomeValor')

function exec() {
  const introductions = "Hey"; // Contexto léxico 2 - Definida em um contexto específico da função
  return introductions;
}

// const introductions = 'Holla' // Erro! (Constantes 'introductions' sendo declarada mais de uma vez no mesmo esscopo/contexxto léxico)

// Objetos são conjuntos aninhados de pares Nome/Valor
const client = {
  name: "Ana",
  age: 18,
  weight: 45.0,
  adress: {
    street: "Rua 01",
    number: 370,
  },
};
console.log(introductions);
console.log(exec());
console.log(client);
// É possível ter conjuntos chave/valor com a mesma chave/identificador, desde que estejam em contextos diferentes
// Isto é, estão declarados em escopos diferentes.
