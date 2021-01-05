function notaDeAlunos(nota) {
  let proximoMultiploDe5 = nota;
  if (nota >= 0 && nota <= 100) {
    while (proximoMultiploDe5 % 5 != 0) {
      proximoMultiploDe5++;
    }

    if (nota < 40) {
      if (proximoMultiploDe5 - nota < 3) {
        nota = proximoMultiploDe5;
      } else {
        console.log("Reprovado");
      }
      if (nota >= 40) {
        console.log("Aprovado");
      } else {
        console.log("Reprovado");
      }
    } else {
      console.log("Aprovado");
    }
  }
}

notaDeAlunos(38);
notaDeAlunos(34);
notaDeAlunos(29);
notaDeAlunos(100);
notaDeAlunos(53);
