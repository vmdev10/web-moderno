function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const myMother = new Person('Valciana', 'Moura Martins', 34, 'Brown');
console.log(Object.values(myMother))

const myFather = new Person('Francisco Ricardo', 'de Moura', 36, 'Brown')

let properties = ''
for(const prop in myFather) {
    properties += myFather[prop] + " "
}
console.log(properties.trim())

const my = new Person('Ana Vitória', 'Martins Moura', 18, 'Brown')
console.log(JSON.stringify(my))

Object.defineProperty(my, 'nationality', {value: 'English'} )
console.log(my.nationality)
console.log(Object.hasOwnProperty(my))