// Getters e setters permitem definir acessadores de objeto de forma mais controlada
// Método get para ler o valor de uma variável
// Método set para alterar o valor de uma variável

const person = {
  firstName: "Ana",
  lastName: "Vitória",
  language: "English",
  // lang() {return this.language}
  get lang() {
    return this.language;
  },
};

console.log(person.lang);

const person2 = {
  firstName: "Ana",
  lastName: "Júlia",
  language: "",
  set lang(lang) {
    return (this.language = lang);
  },
};
person2.lang = "Português";
console.log(person2.language);

const sequencia = {
  _valor: 1, // Convenção para indicar a variável como privada;
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900; // Desconsiderou porque o valor atual (valor) é menor que (this._valor)
console.log(sequencia.valor, sequencia.valor);

const obj = { counter: 0 };

Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  },
});

obj.increment
console.log(obj.counter);
