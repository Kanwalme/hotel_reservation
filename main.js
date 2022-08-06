const hotelContainer = document.querySelector('#hotel-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/houses`

const hotelCallback = ({ data: rooms }) => displayroom(rooms)
const errCallback = err => console.log(err)

const getAllrooms = () => axios.get(baseURL).then(hotelCallback).catch(errCallback)
const createreservation = body => axios.post(baseURL, body).then(hotelCallback).catch(errCallback)
const deletereservation = id => axios.delete(`${baseURL}/${id}`).then(hotelCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let checkIn = document.querySelector('#checkIn')
    let checkOut = document.querySelector('#checkOut')



    let bodyObj = {
        name: name.value,
        email: email.value, 
        checkIn: checkIn.value,
        checkOut: checkOut.value
    }

    createHouse(bodyObj)

    name.value = ''
    email.value = ''
    checkIn.value = ''
    checkOut.value = ''

}
