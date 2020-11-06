/*
Switch
    É usado para múltiplas seleções (como vários if e else)
    Diferente do if  que recebe uma estrutura relacional e que retorna um valor true ou false 
    o switch recebe um valor básico (como um valor inteiro)

Case
    Para cada case é possível ter um conjunto de códigos para ser executado.
*/
const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10: // Se aprensentar mais de case com a mesma sentença de código (como o case 10 e 9) não é preciso repeti-lo
    case 9:
      console.log("Quadro de Honra");
      break; // Para o programa sair do switch sem executar todos os cases é necessário a palavra reservada BREAK ou uma vez que ele entrar em um caso, será executado todos os que estão abaixo.
    case 8:
    case 7:
      console.log("Aprovado");
      break;
    case 6:
    case 5:
    case 4:
      console.log("Recuperação");
      break;
    case 3:
    case 2:
    case 1:
    case 0:
      console.log("Reprovado");
      break;
    default:
      console.log("Nota inválida");
  }
};

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);
