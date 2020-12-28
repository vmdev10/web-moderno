const port = 3003;

const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const dataBase = require('./dataBase')

app.use(bodyParser.urlencoded({extended: true})) // (O body estando no padrão urlenconded) irá retornar um middleware que fará um parse e tranformara os dados em objetos para serem manipulados no lado do servidor

// app.get("/products", (req, res, next) => {
//   console.log("Middleware 1...");
//   next();
// });


// O método http "use" é uma outra forma de colocar um middleware na requisição dentro do express, atende qualquer requisição
// app.use((req, res, next) => {
//     res.send({ name: "Notebook", price: 2567.99 }); // Converter para JSON
// });

//Retornar a lista de products
app.get("/products", (req, res, next) => {
  res.send(dataBase.getProducts()); // Converter para JSON
});

app.get("/products/:id", (req, res, next) => {
  res.send(dataBase.getProduct(req.params.id)); // Dentro dos params da req eu encontro o atributo id
});

app.post("/products", (req, res, next) => {
  const product = dataBase.saveProduct({
      name: req.body.name,
      price: req.body.price
  })
  res.send(product)
});

app.put("/products/:id", (req, res, next) => {
    const product = dataBase.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
  });

app.delete("/products/:id", (req, res, next) => {
  const product = (dataBase.deleteProduct(req.params.id)); // Dentro dos params da req eu encontro o atributo id
  res.send(product)
});


app.listen(port, () => {
  console.log(`Running at the port ${port}`);
});
