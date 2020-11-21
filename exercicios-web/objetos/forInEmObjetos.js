/*
O bloco de código dentro do for...in loop será executado uma vez para cada propriedade.
*/

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
}

person.city = 'New York'
console.log(person.city)

// A instrução for ... in percorre as propriedades de um objeto
for(const x in person) {
    console.log(`${person[x]} this is my ${x}`)
    
}
//O bloco de código dentro do for será executado uma vez para cada propriedade