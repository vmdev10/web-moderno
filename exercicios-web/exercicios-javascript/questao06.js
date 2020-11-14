function jurosSimples(capitalIncial = 100, taxa = 0.1, tempo = 10) {
  const jurosSimples = capitalIncial * taxa * tempo;
  const montante = capitalIncial + jurosSimples;

  return montante;
}

console.log(jurosSimples());

function jurosCompostos (capitalIncial = 100, taxa = 0.1, tempo = 10) {
    const montante = capitalIncial * Math.pow((1 + taxa), tempo);
    return montante;
}
console.log(jurosCompostos());