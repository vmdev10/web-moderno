/* ForEach
    Internamente tem um for que precorre cada elemento do array 
    e executa a ação especificada na função callback para cada um deles
*/
const aprovados = ["Carlos", "Ana", "Bia"];

aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1} ${nome}`);
});

aprovados.forEach((nome) => console.log(nome));

const exibirAprovados = (nomeDosAprovados) => console.log(nomeDosAprovados);
aprovados.forEach(exibirAprovados);
