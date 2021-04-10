const  bodyParser = require ('body-parser')
const express = require('express')
const app = express()

const port = 8080

// Para servir os arquivos estáticos referenciados por '.' (Na pasta atual)
app.use(express.static('.'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/test', (request, response) => response.send('OK'))

app.listen(8080, () => console.log('Serve rodando na porta 8080.'))