const port = 3003;

const express = require("express");
const app = express();

// app.get("/produtos", (req, res, next) => {
//   console.log("Middleware 1...");
//   next();
// });


// O método http "use" é uma outra forma de colocar um middleware na requisição dentro do express, atende qualquer requisição
// app.use((req, res, next) => {
//     res.send({ nome: "Notebook", preco: 2567.99 }); // Converter para JSON
// });

app.get("/produtos", (req, res, next) => {
  res.send({ nome: "Notebook", preco: 2567.99 }); // Converter para JSON
});

app.listen(port, () => {
  console.log(`Executando na porta ${port}`);
});
