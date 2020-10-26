var express = require('express')
var app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/csvread', (req, res) => {
  res.send('Hello World--csv read!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})