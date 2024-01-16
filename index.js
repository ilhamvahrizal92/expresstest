const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Selamat datang di DevOps')
})

app.listen(3000)