const hotelContainer = document.querySelector('#hotel-container')
const form = document.querySelector('form')

async function populate() {

    const requestJSON = '../server/db.json';
    const request = new Request(requestJSON);

    const response = await fetch(request);
    const hotelDestinations = await response.json();

    populateHotels(hotelDestinations);
}

const baseURL = `http://localhost:4005/api/hotels`

// const hotelCallback = ({ data: rooms }) => displayroom(rooms)
// const errCallback = err => console.log(err)

// const getAllhotels = () => axios.get(baseURL).then(hotelCallback).catch(errCallback)
// const createreservation = body => axios.post(baseURL, body).then(hotelCallback).catch(errCallback)
// const deletereservation = id => axios.delete(`${baseURL}/${id}`).then(hotelCallback).catch(errCallback)

// function submitHandler(e) {
//     e.preventDefault()

//     let name = document.querySelector('#name')
//     let email = document.querySelector('#email')
//     let checkIn = document.querySelector('#checkIn')
//     let checkOut = document.querySelector('#checkOut')



//     let bodyObj = {
//         name: name.value,
//         email: email.value,
//         checkIn: checkIn.value,
//         checkOut: checkOut.value
//     }

//     createReservation(bodyObj)

//     name.value = ''
//     email.value = ''
//     checkIn.value = ''
//     checkOut.value = ''
// }

function populateHeader(obj) {
    const hotels = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);
}

