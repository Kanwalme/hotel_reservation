// Front end renders the view--what the user see on the screen. when the user wants to get data or to change something, the front end will communicate with the server by making Http requests(get/post/put/delete) using JSON data(thats how you talk to express (backend)). Server side, using express will call the database to get the data or modify the data. Database will send data back to Express, will format the data, and will send it back to the front end.

//creates and appends hotel data used to display on the user-end.
function populateHotels(hotel) {
  const section = document.querySelector('section')
  //this while loop is used to display just one hotel selection at a time on the main page and to remove others from the section section if any more are selected.
  while (section.lastElementChild) {
    section.removeChild(section.lastElementChild)
  }
// from lines 10-16, I am creating html elements used to store hotel information.
  const hotelImg = document.createElement('img')
  const selectedHotel = document.createElement('article')
  const hotelId = document.createElement('p')
  const hotelLocation = document.createElement('p')
  const price = document.createElement('p')
  const myBreakLine = document.createElement('br')
  const reserveButton = document.createElement('button')
  
  //accessing information from the db.json file and adding the reserve now button to the appropriate elements we created.
  hotelImg.src = hotel.imageURL
  hotelLocation.textContent = `Location: ${hotel.location}`
  price.textContent = `Price per Night: $${hotel.pricePernight}`
  reserveButton.id = hotel.id
  reserveButton.classList.add('ReserveNowButton')
  reserveButton.textContent = 'Reserve Now'

  //appending the hotel items to each hotel in the section section
  selectedHotel.appendChild(hotelImg)
  selectedHotel.appendChild(hotelId)
  selectedHotel.appendChild(hotelLocation)
  selectedHotel.appendChild(price)
  selectedHotel.appendChild(myBreakLine)
  selectedHotel.appendChild(reserveButton)
  section.appendChild(selectedHotel)

  //adding event listener once reserve now button has been clicked, to call reserveNow function.
  const elements = document.getElementsByClassName('ReserveNowButton')
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', reserveNow, false)
  }
}

async function GetHotel(event) {

  event.preventDefault()
 
  const formData = new FormData(document.querySelector('form'))
  const { data } = await axios({
    method: 'post',
    url: 'http://localhost:4004/api/search',
    data: JSON.stringify(Object.fromEntries(formData)),
    headers: { 'Content-Type': 'application/json' }
  })

  populateHotels(data)
}

async function reserveNow(e) {
  e.preventDefault()

  const formData = new FormData(document.querySelector('form'))
  const { data } = await axios({
    method: 'post',
    url: 'http://localhost:4004/api/reserve',
    data: JSON.stringify(Object.fromEntries(formData)),
    headers: { 'Content-Type': 'application/json' }
  })
}
document.querySelector('form').addEventListener('submit', GetHotel)

