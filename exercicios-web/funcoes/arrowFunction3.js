/*
THIS
    Numa função arrow, o this é fixo, isto quer dizer que ele é baseado no contexto onde a função foi escrita/definida
    e a forma como a função foi chamado não altera o seu valor.
*/

// O valor do This dentro de uma função tradicional em JavaScript varia de acordo com a chamada da função
// e aponta para o objeto global tanto do Browser (Window) quando no node (global)
let comparaComThis = function (param) {
  console.log(this === param);
};
comparaComThis(global);

// O this na função tradicional integrada com a função bind, permite especificar o o objeto para qual o this era apontar
// Nesse caso o objeto especificado foi o {obj}. Logo ela deixa de apontar para o contexto global
const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

//O valor do This em uma arrow function aponta para o arquivo/módulo no qual a função foi criada
let comparaComThisArrow = (param) => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

// O this em uma função arrow integrada com a função bind não alterará o seu valor
// ele ainda vai apontar para o arquivo onde originalmente foi criado
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);
