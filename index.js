const express = require('express')
const app = express()
const port = 3000

const notes = {
  "0": "I love coding",
  "1": "Today I made a REST API"
}

app.get('/', (req, res) => {
 res.send(notes)
})

app.get('/note', (req, res) => {
  const parameters = req.query
  const noteIndex = parameters.note
  res.send(notes[noteIndex])
 })

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})
