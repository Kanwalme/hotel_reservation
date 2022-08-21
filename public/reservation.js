
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
        const tableContents = document.createElement('tr')
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
          { name: 'price', value:'"$" +reservation.price' }
        ]
        dataAttrs.forEach(({ name, value }) => {
          const mytd = document.createElement('td')
          mytd.textContent = eval(value)
          tableContents.appendChild(mytd)
        })
        const reservationTable = document.createElement('td')
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.id = reservation.id
        deleteButton.addEventListener('click', deleteReservation, false)
        reservationTable.appendChild(deleteButton)
        tableContents.appendChild(reservationTable)
        table.appendChild(tableContents)
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
  