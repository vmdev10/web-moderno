function classificacaoAno(ano) {
  if (ano % 4 === 0 && ano % 100 !== 0) {
    return `O ano ${ano} é bissexto`;
  } else if (ano % 100 === 0 && ano % 400 === 0) {
    return `O ano ${ano} é bissexto`;
  }
  return `O ano ${ano} não é bissexto`;
}
console.log(classificacaoAno(2020));
console.log(classificacaoAno(1700));
console.log(classificacaoAno(1988));
console.log(classificacaoAno(1800));
console.log(classificacaoAno(1992));
console.log(classificacaoAno(1900));
console.log(classificacaoAno(1996));
