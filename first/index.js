require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tweet' ,(req,res) => {
    res.send('Faizan is here')
})

app.get('/login' ,(req,res) => {
    res.send('Faizan k website ko login kr lo guys')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})