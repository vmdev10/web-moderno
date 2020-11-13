// Exemplo de callback no Browser

// Sempre que o evento clicar na tag ocorrer a função é disparada.
document.getElementsByTagName("body")[0].onclick = function (e) {
  console.log("O evento ocorreu!");
};
