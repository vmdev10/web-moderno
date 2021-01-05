// IIFE -> Imediately Invoked Function Expression
// Envolvo uma função anônima entre parênteses e invoco-a instantaneamente

(function () {
  console.log("Será executado na hora!!");
  console.log(
    "Tudo que for declarado dentro de uma IIFE foge do escopo global"
  );
})();

const add = (function () {
  counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();
add()
add()
add()
add()
console.log(add())