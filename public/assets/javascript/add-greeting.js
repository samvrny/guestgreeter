const customForm = document.getElementById('greeting-form');
const customGreeting = document.getElementById('custom-greeting');
const greetingOption = document.getElementById('greeting-list');

//call to save a custome greeing to the JSON backend
function saveGreeting(greeting) {
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
            if (response.ok) {
                console.log('Success!')
            } else {
                console.log('Something went wrong!')
            }
        })

    //get the child to select correctly
    while (greetingOption.lastChild) {
        greetingOption.removeChild(greetingOption.lastChild)
    }
    //reprint the disables=d 'choose option' option selection to the greetings choice list before printing the greetings
    const firstOption = document.createElement('option');
    firstOption.textContent = '--Choose an option--'
    firstOption.setAttribute('disabled', true)
    firstOption.setAttribute('selected', true)
    greetingSelect.appendChild(firstOption)
    //call to repopulate greetings list with new data
    populateGreetings()
}

//staging the new greeting and updating the greeting list
function makeGreeting(event) {
    event.preventDefault()
    if (customGreeting.value) {
        const greeting = customGreeting.value
        saveGreeting(greeting)
        customGreeting.value = ''
    } else {
        return;
    }
}

customForm.addEventListener('submit', makeGreeting)