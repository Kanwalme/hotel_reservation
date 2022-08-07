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

    createReservation(bodyObj)

    name.value = ''
    checkIn.value = ''
    checkOut.value = ''
}
function createHouseCard(house) {
    const houseCard = document.createElement('div')
    houseCard.classList.add('house-card')

    houseCard.innerHTML = `<img alt='house cover image' src=${house.imageURL} class="house-cover-image"/>
    <p class="address">${house.address}</p>
    <div class="btns-container">
        <button onclick="updateHouse(${house.id}, 'minus')">-</button>
        <p class="house-price">$${house.price}</p>
        <button onclick="updateHouse(${house.id}, 'plus')">+</button>
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

