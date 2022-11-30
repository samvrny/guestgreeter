//grabbing the selection lists so we can get the company, guest, and greeting id's off of them
const guestOptions = document.getElementById('guest-list')
const companyOptions = document.getElementById('company-list');
const greetingOptions = document.getElementById('greeting-list');
const generateButton = document.getElementById('generate-message');

//guest and company classes to handle the new message with
class Guest {
    constructor(firstName, lastName, roomNumber) {
        this.firstName = firstName
        this.lastName = lastName
        this.roomNumber = roomNumber
    }
}

class Company {
    constructor() {
        this.hotelName = variable
        this.cityName = variable
        this.timeZone = variable
    }
}

function readyPrinting() {
    let guestId = guestOptions.options[guestOptions.selectedIndex].id
    let companyId = companyOptions.options[companyOptions.selectedIndex].id
    let greetingId = greetingOptions.options[greetingOptions.selectedIndex].id
    
    if(guestId && companyId && greetingId) {
        getValues(guestId, companyId, greetingId)
    } else {
        //this is where an error message will live
        console.log('You must select all of your options')
    }
}

function getValues(guestId, companyId, greetingId) {

    fetch(`/guests/${guestId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            response.send(404)
        }
    })
    .then(response => {
        let guest = new Guest(
            response.firstName,
            response.lastName,
            response.reservation.roomNumber
        )
        console.log(guest)
    })
}

generateButton.addEventListener('click', readyPrinting)
