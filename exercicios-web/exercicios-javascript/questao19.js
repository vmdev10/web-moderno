function contaDoLanche(codigo, quantidade) {
    let lanche = ''
    let valorDaConta = 0
  switch (codigo) {
    case 100:
      lanche = "Cachorro quente";
      valorDaConta = quantidade * 3
      return `O valor de ${quantidade} ${lanche} foi R$ ${valorDaConta}`;
    
    case 200:
        lanche = "Hambúrguer simples"
        valorDaConta = quantidade * 4
        return `O valor de ${quantidade} ${lanche} foi R$ ${valorDaConta}`;
    
    case 300:
        lanche = "Cheeseburguer"
        valorDaConta = quantidade * 5.5
        return `O valor de ${quantidade} ${lanche} foi R$ ${valorDaConta}`;
    
    case 400:
        lanche = 'Bauru'
        valorDaConta = quantidade * 7.5
        return `O valor de ${quantidade} ${lanche} foi R$ ${valorDaConta}`;
    
    case 500:
        lanche = 'Refrigerante'
        valorDaConta = quantidade * 3.5
        return `O valor de ${quantidade} ${lanche} foi R$ ${valorDaConta}`;
    
    case 600:
        lanche = 'Suco'
        valorDaConta = quantidade * 2.8
        return `O valor de ${quantidade} ${lanche} foi R$ ${valorDaConta}`;

    default:
        return 'Produto não existente'


  }
}
console.log(contaDoLanche(100, 2));
console.log(contaDoLanche(200, 1));
console.log(contaDoLanche(300, 3))
console.log(contaDoLanche(400, 1))
console.log(contaDoLanche(500, 2))
console.log(contaDoLanche(600, 1))
console.log(contaDoLanche(00, 1))