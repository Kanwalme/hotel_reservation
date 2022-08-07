const hotels = require('./db.json')
let globalId = 4

module.exports = {
    gethotels: (req, res) => res.status(200).send(hotels),
    deleteHotel: (req, res) => {
        let index = hotels.findIndex(elem => elem.id === +req.params.id)
        hotels.splice(index, 1)
        res.status(200).send(hotels)
    }
}