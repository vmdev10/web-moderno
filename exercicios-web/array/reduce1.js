const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

// 0 -> Valor inicial, caso não seja passado, o primeiro elemento do array será o valor inicial
const resultado = (alunos.map(e => e.nota)).reduce(function(acumulador, valorAtual){
    console.log(`${acumulador} ${valorAtual}`)
    return acumulador + valorAtual
}, 0)

console.log(resultado)