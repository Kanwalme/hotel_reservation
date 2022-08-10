  

  function populateHotels (hotel) {
    const section = document.querySelector('section')
    while (section.lastElementChild) {
      section.removeChild(section.lastElementChild)
    }
    const selectedHotel = document.createElement('article')
    const hotelId = document.createElement('p')
    const hotelLocation = document.createElement('p')
    const price = document.createElement('p')
    const hotelImg = document.createElement('img')
    const myBreakLine = document.createElement('br')
    const reserveButton = document.createElement('button')
  
    hotelId.textContent = hotel.id
    hotelLocation.textContent = `Location: ${hotel.location}`
    price.textContent = `Price per Night: ${hotel.pricePernight}`
    hotelImg.src = hotel.imageURL
    reserveButton.id = hotel.id
    reserveButton.classList.add('ReserveNowButton')
    reserveButton.textContent = 'Reserve Now'
  
    selectedHotel.appendChild(hotelId)
    selectedHotel.appendChild(hotelLocation)
    selectedHotel.appendChild(price)
    selectedHotel.appendChild(hotelImg)
    selectedHotel.appendChild(myBreakLine)
    selectedHotel.appendChild(reserveButton)
    section.appendChild(selectedHotel)
  
    const elements = document.getElementsByClassName('ReserveNowButton')
  
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', reserveNow, false)
    }
  }
  
  async function GetHotel (event) {
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
  
  async function reserveNow (e) {
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
  
