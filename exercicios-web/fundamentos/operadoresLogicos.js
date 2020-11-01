function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = (trabalho1 && trabalho2) || trabalho2;
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) //Bitwise xor - 'Ou' exclusivo
  const comprarTv32 = trabalho1 != trabalho2;
  const manterSaudavel = !comprarSorvete; //Operador unário

  //Como o JS só permite um retorno, uso o object para agrupar mais valores
  // return {comprarSorvete: comprarSorvete, comprarTv50: comprarTv50, comprarTv32: comprarTv32, manterSaudavel: manterSaudavel}

  // Quando o atributo for igual ao valor, pode representar dessa forma:
  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
