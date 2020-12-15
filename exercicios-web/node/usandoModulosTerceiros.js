// Esse tipo de import ele procura dentro de node_modules o arquivo index.js
const _ = require('lodash') // "_" Referencia a biblioteca

setInterval(() => console.log(_.random(1, 100)), 2000)