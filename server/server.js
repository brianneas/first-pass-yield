const express = require('express')
const path = require('path')
const sqlite3 = require('sqlite3')

const app = express()

const db = new sqlite3.Database("../firstPassYield.db")
console.log("Successfully opened the database.")

app.use(express.json())
app.use(express.static('../client'))

app.get('/questions', (req, res) => {
   const query = `SELECT * FROM question`

   db.all(query, (err, rows) => {
      if (err) {
         res.status(500).json({ message: 'Database error.', err })
         return
      }

      console.log(rows)

      res.json(rows)
   })   
})

app.get('*', (req, res) => {
  res.status(404).end('Page not found. :(')
})

app.listen(8080, function() {
   console.log("Successfully created server.")
})