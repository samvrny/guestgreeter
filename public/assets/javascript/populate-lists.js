const guestSelect = document.getElementById('guest-list')

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
            return response.json();
        } else {
            //display error onscreen
        }
    })
    .then(response => {
        printGuests(response)
    })
}

function printGuests(guests) {
    for(i=0; i < guests.length; i++) {
        const guestOption = document.createElement('option');
        guestOption.textContent = guests[i].firstName + ' ' + guests[i].lastName;
        guestSelect.appendChild(guestOption)
    }
}

populateGuests();