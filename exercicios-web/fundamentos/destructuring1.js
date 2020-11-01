const person = {
  name: "Ana",
  age: 5,
  adress: {
    street: "Rua ABC",
    number: 1000,
  },
};

const { name, age } = person; // Desestruturar os atibutos name e age que pertencem ao objeto person
console.log(name, age)

const {name: n, age: a} = person; // Armazenando diretamente o atributo name em uma variável 'n' e o atributo age em uma variável 'a'
console.log(n, a)

const {weight, prettyHappy = true} = person // Atributos quw não pertecem ao objeto person, retornariam undefinid, com exeção do 'prettyHappy' já que foi passado um valor padrão para ele (true)
console.log(weight, prettyHappy)

const {adress: {street, number}} = person // Desestruturar os atibutos street e number que pertencem ao objeto adress, que percente ao objeto person
console.log(street, number)

//const {adress: {street, number, cep}} = person
//console.log(street, number, cep)