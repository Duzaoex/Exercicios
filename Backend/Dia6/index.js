const mysql = require('mysql2/promise')
const express = require('express')

const app = express()
const connection = mysql.createPool({
  host: 'localhost',
  port: 3001,
  user: 'root',
  password: '123',
  database: 'sakila'
})

app.get('/actors', async (req, res) => {
  const actors = await connection.execute('SELECT * FROM actor')
  res.json(actors)
})

app.listen(3000, () => {
  console.log('Já estou online e rodando na 3000')
})