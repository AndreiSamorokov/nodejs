var express = require('express')
var app = express()

// read csv
const neatCsv = require('neat-csv');
const fs = require('fs')

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/csvread', (req, res) => {
  
  // read csv file
  fs.readFile('./assets/csvtest.csv', async (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    res.send( await neatCsv(data) );
  })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})