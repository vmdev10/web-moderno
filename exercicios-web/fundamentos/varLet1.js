// Variáveis definidas com a palavra reservada let tem escopo global, escopo de função e escopo de bloco

let numero = 1;
{
  let numero = 2;
  console.log("Dentro = ", numero);
}
console.log("Fora = ", numero);

console.log();

let numero1 = 1;
{
  let numero2 = 2;
  console.log("Dentro = ", numero1);
}
console.log("Fora = ", numero1);