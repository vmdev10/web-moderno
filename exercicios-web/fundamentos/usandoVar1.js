//Uma variável do tipo 'var' respeita dois escopos:
    //Escopo global, visível em toda sua aplicação
        //Cuidado!!! Pode gerar sobreposição
    //Escopo de função, visível apenas dentro do bloco

{
  {
    {
      {
          var sera = 'Será???'
          console.log(sera)
      }
    }
  }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}
teste()
console.log(local)