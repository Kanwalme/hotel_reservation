const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getHotels,
    deleteHotel
} = require('./controller')

app.get(`/api/hotels`, getHotels)
app.delete(`/api/hotels/:id`, deleteHotel)

app.listen(4005, () => console.log(`running on 4005`))