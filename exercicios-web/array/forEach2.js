// IMPLEMENTAR A FUNÇÃO FOREACH2
Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    // Paraca cada índice do Array, a função callback recebe três param.
    callback(this[i], i, this);
  }
};

const aprovados = ["Carlos", "Ana", "Bia"];

aprovados.forEach2(function (nome, indice) {
  console.log(`${indice + 1} ${nome}`);
});
