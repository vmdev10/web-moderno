const express = require('express')
const app = express()

app.use(express.static('.'))

app.get('/test',(req, res) => res.send('ok'))
app.listen(8080, () => console.log('Executando na porta 8080'))