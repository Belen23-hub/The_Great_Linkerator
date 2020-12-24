const express = require('express')
const path = require('path')

const { sync } = require('./data_layer/index')

const PORT = process.env.PORT || 3001
const FORCE = process.env.FORCE || false

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'dist','index.html'))
})

const startServer = new Promise((resolve) => {
  app.listen(PORT, () => {
    console.log('we are on port', PORT)
    resolve()
  })
})

sync(FORCE)
  .then(startServer)
  .catch((error) => {
    console.error(`YIKES: ${error.toString()}`)
  })
