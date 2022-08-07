const hotelContainer = document.querySelector('#hotel-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/hotels`

const hotelCallback = ({ data: rooms }) => displayroom(rooms)
const errCallback = err => console.log(err)

const getAllhotels = () => axios.get(baseURL).then(hotelCallback).catch(errCallback)
const createreservation = body => axios.post(baseURL, body).then(hotelCallback).catch(errCallback)
const deletereservation = id => axios.delete(`${baseURL}/${id}`).then(hotelCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let checkIn = document.querySelector('#checkIn')
    let checkOut = document.querySelector('#checkOut')
    let getAllHotels = document.querySelector('#btnSearch')



    let bodyObj = {
        name: name.value,
        checkIn: checkIn.value,
        checkOut: checkOut.value
    }

    // createReservation(bodyObj)

    // name.value = ''
    // checkIn.value = ''
    // checkOut.value = ''
}
function createHotelCard(hotel) {
    const hotelCard = document.createElement('div')

    hotelCard.innerHTML = `<img alt='hotel cover image' src=${hotel.imageURL} class="hotel-cover-image"/>
    <p class="name">${house.address}</p>
    <div class="btns-container">
        <p class="house-price">$${house.price}</p>
    </div>
    <button onclick="deleteHouse(${house.id})">delete</button>
    `
    housesContainer.appendChild(houseCard)
}

function displayHouses(arr) {
    housesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createHouseCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

fetch("/server/db.json")
    .then(function (resp) {
        return resp.json()
    })
    .then(function (data) {
        console.log(data.id)
    })

