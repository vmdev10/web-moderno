// Função factory com parâmetros personalizáveis

function criandoProdutos(nome, preco) {
    return {
        nome,
        preco //Não é necessário repetir o atributo:valor se ambos tiverem o mesmo nome
    }
}


console.log(criandoProdutos('mesa', 300.00))
console.log(criandoProdutos('SmartTV', 2400.00))
console.log(criandoProdutos('Smartphone', 1899.90))