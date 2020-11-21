// Cadeia de protótipos (prototype chain)
Object.prototype.atributo0 = 0;
const avo = { atributo1: "A" }; // Quando não é definido 
const pai = {
  __proto__: avo, // Refernciar o protótipo da pai (que é avo)
  atributo2: "B",
  atributo3: 3,
};
const filho = { __proto__: pai, atributo3: "C" };
console.log(filho.atributo1, filho.atributo0, filho.atributo2, filho.atributo3);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
      return `${this.velAtual}km/h de ${this.velMax}km/h`
  }
};

const ferrari = {
   // __proto__: carro,
    modelo: 'F40',
    velMax: 324 // Shadowing - Sombreamento/sobreposição da variável
}

const volvo = {
    // __proto__: carro,
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

// Outra forma de referenciar o protótipo é com a função setPrototypeOf(objeto, protótipo)
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

carro.acelerarMais(100)
console.log(carro.status())
carro.acelerarMais(100)
console.log(carro.status())
carro.acelerarMais(100)
console.log(carro.status())

console.log()

console.log(ferrari.status())
ferrari.acelerarMais(200)
console.log(ferrari.status())

console.log()

console.log(volvo.status())
volvo.velAtual = 50
volvo.acelerarMais(100)
console.log(volvo.status())