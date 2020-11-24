console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"]; // Array literal, forma mais adequada de criar um array.

// Array
// Estrutura indexada
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

// Adicionar elementos em um array

aprovados[3] = "Wemerson"; // Pode ser usada parar criar ou substituir valores em um array
console.log(aprovados[3]);
aprovados.push("Júlia");
console.log(aprovados.length);

aprovados[9] = "Rafael";
console.log(aprovados.length);
console.log(aprovados[8] === undefined); // Os elementos/índices estão no array, apenas não foram incicializados

console.log(aprovados);
console.log(aprovados.sort());

// Deletar elementos
delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]); // A deleção não altera a posição dos demais elementos

aprovados = ["Bia", "Carlos", "Ana"];
aprovados.splice(1, 2); //Primeiro param.: Referente a partir de qual ÍNDICE iniciar a remoção
// Segundo param.: É referente a quantidade de elementos a serem removidos a partir do índice

console.log(aprovados);
