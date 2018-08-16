const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(3000, () => {
  console.log(`crash-your-tab running on 3000`)
})