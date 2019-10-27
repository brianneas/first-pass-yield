const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.static('../client'))

app.get('*', (req, res) => {
  res.status(404).end('Page not found. :(')
})

app.listen(8080, function() {
   console.log("Successfully created server.")
})