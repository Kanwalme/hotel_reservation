const express = require('express')
const cors = require('cors')
const path = require('path');

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'));

const {
    getHotels,
    deleteHotel
} = require('./controller')

app.get(`/`, function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get(`/api/hotels`, getHotels)

app.delete(`/api/hotels/:id`, deleteHotel)

app.listen(4004, () => console.log(`Your app is running on 4004`))
