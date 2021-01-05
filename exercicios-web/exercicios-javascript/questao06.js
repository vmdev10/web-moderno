function jurosSimples(capitalIncial, taxa, tempo) {
  const jurosSimples = capitalIncial * taxa * tempo;
  const montante = capitalIncial + jurosSimples;

  return montante;
}

function jurosCompostos (capitalIncial, taxa, tempo) {
    const montante = capitalIncial * (1 + taxa) ** tempo;
    return montante.toFixed;
}

console.log(jurosSimples());
console.log(jurosCompostos());