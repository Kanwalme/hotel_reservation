const hotels = require('./db.json')
let globalId = 9

module.exports = {
    getHotels: (req, res) => res.status(200).send(hotels),
    deleteHotel: (req, res) => {
        let index = hotels.findIndex(elem => elem.id === +req.params.id)
        hotels.splice(index, 1)
        res.status(200).send(hotels)
    }
}