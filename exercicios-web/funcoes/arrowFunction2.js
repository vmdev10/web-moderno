function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade) // O this aponta pra o objeto o qual ele pertence que é o objeto Pessoa
  }, 1000);
}

new Pessoa()
