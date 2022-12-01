const customForm = document.getElementById('greeting-form');
const customGreeting = document.getElementById('custom-greeting');
const greetingOption = document.getElementById('greeting-list');

function saveGreeting(greeting) {
    console.log(greeting)
    const greetingObject = { greeting }
    fetch('/greeting', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(greetingObject)
    })
    .then(response => {
        if(response.ok) {
            //add a message display here!
            console.log('Success!')
        } else {
            console.log('Failure')
        }
    })
}

function makeGreeting(event) {
    event.preventDefault()
    //ask Reese how to select the second child here instead of the first child
    while(greetingOption.firstChild) {
        greetingOption.removeChild(greetingOption.firstChild)
    }
    //call to repopulate greetings list with new data
    populateGreetings()
    const greeting = customGreeting.value
    saveGreeting(greeting)
}

customForm.addEventListener('submit', makeGreeting)