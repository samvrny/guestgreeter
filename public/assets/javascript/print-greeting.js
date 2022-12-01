//grabbing the selection lists so we can get the company, guest, and greeting id's off of them
const guestOptions = document.getElementById('guest-list')
const companyOptions = document.getElementById('company-list');
const greetingOptions = document.getElementById('greeting-list');
//button that captures the data from the options when clicked
const generateButton = document.getElementById('generate-message');

//guest, greeting and company classes to handle the new message with
class Guest {
    constructor(firstName, lastName, roomNumber) {
        this.firstName = firstName
        this.lastName = lastName
        this.roomNumber = roomNumber
    }
}

class Company {
    constructor(company, city, timezone) {
        this.hotelName = company
        this.cityName = city
        this.timeZone = timezone
    }
}

class Greeting {
    constructor(greeting) {
        this.greeting = greeting
    }
}

//grabbing the id values of the selected options, and sending them to fetch data from them
function readyPrinting() {
    let guestId = guestOptions.options[guestOptions.selectedIndex].id
    let companyId = companyOptions.options[companyOptions.selectedIndex].id
    let greetingId = greetingOptions.options[greetingOptions.selectedIndex].id

    if (guestId && companyId && greetingId) {
        getValues(guestId, companyId, greetingId)
    } else {
        //this is where an error message will live
        const greetingDisplay = document.getElementById('display-greeting');
        greetingDisplay.textContent = 'Please select a guest, a company, and a custom messge from the above menus'
    }
}

//fetch requests to grab company, guest, and greeting data from the above ids
function getValues(guestId, companyId, greetingId) {

    //fetch the guests data
    let fetchGuest = fetch(`/guests/${guestId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                response.send(404)
            }
        })

    //fetch the company's data
    let fetchCompany = fetch(`/company/${companyId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                response.send(404)
            }
        })

    //fetch the greeting
    let fetchGreeting = fetch(`/greeting/${greetingId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                response.send(404)
            }
        })

    //compile all the fetched data 
    const allData = Promise.all([fetchGuest, fetchCompany, fetchGreeting])
    allData.then((res) => createObjects(res))
}

//create objects to handle data for message
function createObjects(data) {
    let guest = new Guest(
        data[0].firstName,
        data[0].lastName,
        data[0].reservation.roomNumber
    )

    let company = new Company(
        data[1].company,
        data[1].city,
        data[1].timezone
    )

    let greeting = new Greeting(
        data[2].greeting
    )

    printGreeting(guest, company, greeting)
}

//print the greeting to the page
function printGreeting(guest, company, greeting) {
    let date = moment();

    //setting the correct timezone for a greeting, and setting to proper greeting based on time
    if(company.timeZone === "US/Pacific") {
        date = moment().subtract(4, 'h').format('k')
    } else if(company.timeZone === "US/Central") {
        date = moment().format('k')
    } else if(company.timeZone === "US/Eastern") {
        date = moment().add(2, 'h').format('k')
    }

    //setting the greeting to be specific to the time
    let timeGreeting = 'Hello'
    if(parseInt(date) >= 1 && parseInt(date) < 12) {
        timeGreeting = 'Good morning'
    } else if(parseInt(date) >= 12 && parseInt(date) <= 17 ) {
        timeGreeting = 'Good Afternoon'
    } else {
        timeGreeting = 'Good evening'
    } 

    //grabbing the template to be made into a custom greeting
    const rawGreeting = greeting.greeting

    const finalGreeting = rawGreeting
        .replaceAll('firstName', guest.firstName)
        .replaceAll('lastName', guest.lastName)
        .replaceAll('roomNumber', guest.roomNumber)
        .replaceAll('hotelName', company.hotelName)
        .replaceAll('cityName', company.cityName)
        .replaceAll('timeGreeting', timeGreeting)

    //element where the greeting will be displayed
    const greetingDisplay = document.getElementById('display-greeting');
    //text the selected greeting to the screen
    greetingDisplay.textContent = finalGreeting;

    //adding the for which guest, and hotel to the greeting
    const guestName = document.getElementById('for')
    const hotelName = document.getElementById('hotel')

    guestName.textContent = 'Customer Name: ' + guest.firstName + ' ' + guest.lastName;
    hotelName.textContent = 'Hotel: ' + company.hotelName;
}

//listen for the click on the generate message button, to generate your custom message!
generateButton.addEventListener('click', readyPrinting)
