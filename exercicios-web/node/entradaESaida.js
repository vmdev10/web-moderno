const { exit } = require("process");

// Entrada e saída padrão de dados no terminal, a partir do objeto process
const anonimo = process.argv.indexOf("-a") !== -1; // Se estiver presente dentro da lista de argumentos o elemento especificado ('-a'), retorna true
console.log(anonimo);

if (anonimo) {
  process.stdout.write("Fala anônimo!\n");
  process.exit();
} else {
  process.stdout.write("Informe o seu nome: ");
  process.stdin.on("data", (data) => {
    const nome = data.toString().replace("\r\n", "");

    process.stdout.write(`Fala ${nome}!!\n`);
    process.exit();
  });
}
