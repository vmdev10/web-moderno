const alunos = [
  { nome: "João", nota: 7.9 },
  { nome: "Maria", nota: 9.2 },
];
// Abordagem imperativa -- Foco: Como tem que ser feito
let totalDasNotas = 0;
for (let i = 0; i < alunos.length; i++) {
  totalDasNotas += alunos[i].nota;
  mediaDasNotas = totalDasNotas / alunos.length;
}
console.log(mediaDasNotas);

// Abordagem declarativa -- Foco: O que tem que ser feito
// Código reultilizável (linha 16 e 17)
// Boa prática

const getNota = (e) => {
  return e.nota;
};
const somaDasNotas2 = (resultado, valorAtual) => resultado + valorAtual;
const total = alunos.map(getNota).reduce(somaDasNotas2);
console.log(total / alunos.length);
