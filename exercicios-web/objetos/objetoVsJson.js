const objeto = { a: 1, b: 2, c: 3, soma() {return a + b + c;},};

console.log(JSON.stringify(objeto));
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'));
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": {}, "d": true, "e": []}'))