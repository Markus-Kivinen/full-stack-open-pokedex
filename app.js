const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 5000
const VERSION = process.env.VERSION || '1.1.0'

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send(VERSION)
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
