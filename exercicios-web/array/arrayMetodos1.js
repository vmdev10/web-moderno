const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); // Remover o último elemento do array
console.log(pilotos);

pilotos.push("Verstappen"); // Adiciona elementos ao final do array
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento de um array
console.log(pilotos);

pilotos.unshift("Hamilton"); // Adiciona um elemento ao início do array
console.log(pilotos);

// SPLICE
//Remove elementos de um array e, se necessário, insere novos elementos em seu lugar, retornando os elementos excluídos.
//Adicionar

pilotos.splice(2, 0, "Bottas", "Massa"); // A partir do indíce 2, remover 0 elementos e adicionar 'Bottas' e 'Massa' no seu lugar
console.log(pilotos);

// Remover
pilotos.splice(3, 1);
console.log(pilotos); // A partir do indíce 3, remova um elemento(Próprio indíce 3)

// SLICE
// Retorna a seção de um array
const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(2, 4); // O último elemento não está incluso
console.log(algunsPilotos2);

// Concat()
//  Cria um novo array mesclando(concatenando) arrays existentes

const arr1 = ["Cecilie", "Lone"]
const arr2 = ["Emil", "Tobias", "Linus"]
const arr3 = ["Robin", "Morgan"]    
let myChidren = arr1.concat(arr2, arr3, 'Peter')
console.log(myChidren)
