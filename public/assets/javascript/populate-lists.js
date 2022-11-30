//grabbing the select lists for guests, companies, and greetings by their ids
const guestSelect = document.getElementById('guest-list')
const companySelect = document.getElementById('company-list');

//fetching the guest list to populate the guest select list
function populateGuests() {
    fetch('/guests', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok) {
            //possibly print call to printGuests here.
            return response.json();
        } else {
            //display error onscreen
        }
    })
    .then(response => {
        printGuests(response)
    })
}

//fetching the company list to populate the company select list
function populateCompanies() {
    fetch('/company', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            //display error onscreen
        }
    })
    .then(response => {
        printCompanies(response)
    })
}

function populateGreetings() {
    //logic for greetings
}

//printing the guest list in the guest select option
function printGuests(guests) {
    for(i=0; i < guests.length; i++) {
        const guestOption = document.createElement('option');
        guestOption.textContent = guests[i].firstName + ' ' + guests[i].lastName;
        guestSelect.appendChild(guestOption);
    }
}

//printing the company list in the company select option
function printCompanies(company) {
    for(i=0; i < company.length; i++) {
        const companyOption = document.createElement('option');
        companyOption.textContent = company[i].company;
        companySelect.appendChild(companyOption);
    }
}

function printGreetings() {
    //logic for greetings
}

populateGuests();
populateCompanies();