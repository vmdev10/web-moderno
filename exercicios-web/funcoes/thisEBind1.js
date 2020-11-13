const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
        //console.log(saudacao) // Erro! Saudacao não estão definido
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO
// Falar chamado diretamente, dentro do contexto do node não está associado ao chamar a partir de pessoa

// O bind faz a amarração da função para o objeto específicado
// Instância de função falarDePessoa é resultado da função pessoa.falar() + função bind
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa()

// E isso não altera a instância de outras funções a partir de pessoa.falar.
const falar2 = pessoa.falar
falar2()
