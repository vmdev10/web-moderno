const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length); // Lenght - propriedade que define o comprimento de um array

valores.push({ id: 3 }, false, null, "teste"); // Um array heterogênio, isto é, com tipos de dados diferentes NÃO é uma boa prática
console.log(valores);

console.log(valores.pop()); //O método pop exporta o último elemento do array
delete valores[0]; // Forma de deletar um elemento do array
console.log(valores);

console.log(typeof valores);
