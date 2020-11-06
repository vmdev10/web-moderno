function criandoProdutos(nome, preco) {
    return {
        name: nome,
        price: preco
    }
}
console.log(criandoProdutos('mesa', 300.00))
console.log(criandoProdutos('SmartTV', 2400.00))
console.log(criandoProdutos('Smartphone', 1899.90))