function area(altura, largura) {
  const area = largura * altura;
  if (area > 20) {
    //console.log(`Valor acima do permitido: ${area}m2.`)// Sem o return, retornar undefined
    const notaDeAlerta = `Valor acima do permitido: ${area}m2.`;
    return notaDeAlerta;
  }
  return area;
}
console.log(area(2, 2));
console.log(area(2));
console.log(area());
console.log(area(2, 3, 5, 7, 13));
console.log(area(5, 5));