document.addEventListener(
    'DOMContentLoaded',
    async function () {
      const table = document.querySelector('table')
      const { data } = await axios({
        method: 'get',
        url: 'http://localhost:4004/api/reservation',
        headers: { 'Content-Type': 'application/json' }
      })
      console.log(data)
      data.forEach(reservation => {
        const mytr = document.createElement('tr')
        const dataAttrs = [
          { name: 'id', value: 'reservation.id' },
          {
            name: 'location',
            value: 'reservation.hotel.location'
          },
          {
            name: 'checkin',
            value: 'reservation.checkIn'
          },
          {
            name: 'checkout',
            value: 'reservation.checkOut'
          },
          { name: 'price', value: 'reservation.price' }
        ]
        dataAttrs.forEach(({ name, value }) => {
          const mytd = document.createElement('td')
          mytd.textContent = eval(value)
          mytr.appendChild(mytd)
        })
        const mytd = document.createElement('td')
        const myButton = document.createElement('button')
        myButton.textContent = 'Delete'
        myButton.id = reservation.id
        myButton.addEventListener('click', deleteReservation, false)
        mytd.appendChild(myButton)
        mytr.appendChild(mytd)
        table.appendChild(mytr)
      })
    },
    false
  )
  
  async function deleteReservation (event) {
    const { id } = event.target
    const { data } = await axios({
      method: 'delete',
      url: `http://localhost:4004/api/reservation/${id}`,
      headers: { 'Content-Type': 'application/json' }
    })
    console.log(data)
    window.location.reload()
  }
  