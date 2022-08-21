const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())
app.use(express.static('public'))

const {
  getHotels,
  searchHotels,
  createReservation,
  getReservation,
  deleteReservation
} = require('./controller')

app.get(`/reservation`, function (req, res) {
  res.sendFile(path.join(__dirname + '/public/reservation.html'))
})
app.post('/api/search', searchHotels)

app.post('/api/reserve', createReservation)

app.get('/api/reservation', getReservation)

app.delete('/api/reservation/:id', deleteReservation)

app.listen(4004, () => console.log(`Your app is running on 4004`))
