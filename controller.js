const hotels = require('./db.json')
let globalId = 0
const reservations = []

module.exports = {
  getHotels: (req, res) => res.status(200).send(hotels),
  deleteHotel: (req, res) => {
    let index = hotels.findIndex(elem => elem.id === +req.params.id)
    hotels.splice(index, 1)
    res.status(200).send(hotels)
  },
  searchHotels: (req, res) => {
    res.json(hotels.destinations[req.body.location])
  },
  createReservation: (req, res) => {
    const { location, checkIn, checkOut, guests } = req.body
    const hotel = hotels.destinations[location]
    const reservation = {
      id: globalId,
      hotel,
      checkIn,
      checkOut,
      guests,
      price: hotel.pricePernight * guests
    }
    globalId++
    reservations.push(reservation)
    res.status(201).send(reservations)
  },
  getReservation: (req, res) => res.status(200).send(reservations),
  deleteReservation: (req, res) => {
    const index = reservations.findIndex(elem => elem.id === +req.params.id)
    reservations.splice(index, 1)
    res.status(200).send(reservations)
  }
}
