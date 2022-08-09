// const hotelContainer = document.querySelector('#hotel-container')
// const form = document.querySelector('form')

// async function populate() {

//     const requestJSON = '../server/db.json';
//     const request = new Request(requestJSON);

//     const response = await fetch(request);
//     const hotelDestinations = await response.json();

//     populateHotels(hotelDestinations);
// }

// const baseURL = `http://localhost:4004`

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
// function createHotelCard(hotel) {
//     const hotelCard = document.createElement('div')
    

//     houseCard.innerHTML = `<img alt='hotel cover image' src=${hotel.imageURL} class="hotel-cover-image"/>
//     <p class="location">${hotel.location}</p>
//     <div class="btns-container">
//         <p class="hotel-price">$${hotel.price}</p>
//     </div>
//     <button onclick="deleteHotel(${hotel.id})">delete</button>
//     `


//     hotelContainer.appendChild(hotelCard)
// }

// function displayHouses(arr) {
//     hotelContainer.innerHTML = ``
//     for (let i = 0; i < arr.length; i++) {
//         createHotelCard(arr[i])
//     }
// }

// form.addEventListener('submit', submitHandler)

// getAllhotels()



async function populate() {

   const requestUrl = 'http://localhost:4004/api/hotels'
    
    const response = await fetch(requestUrl);
    const hotelDestinations = await response.json();
    
    populateHotels(hotelDestinations);
    populateHeader(hotelDestinations);
    }
    
    function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.hotelName;
    header.appendChild(myH1);

    }
    
    function populateHotels(obj) {
    const section = document.querySelector('section');
    const hotels = obj.destinations;
    
    for (const hotel of hotels) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('img');
    
    
        myH2.textContent = hotel.id;
        myPara1.textContent = `Location: ${hotel.location}`;
        myPara2.textContent=`Price per Night: ${hotel.pricePernight}`;
        myPara3.src=hotel.imageURL;
    
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        section.appendChild(myArticle);
    }
    }
    
    populate()