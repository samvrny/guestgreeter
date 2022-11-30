const customForm = document.getElementById('greeting-form');
const customGreeting = document.getElementById('custom-greeting');

//create a greeting object
// class Greeting {
//     constructor() {
//         this.greeting = customGreeting.value;
//     }
// }

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
            console.log(response)
            //return response.json();
        } else {
            console.log('Failure')
        }
    })
}

function makeGreeting(event) {
    event.preventDefault()
    const greeting = customGreeting.value
    saveGreeting(greeting)
}

customForm.addEventListener('submit', makeGreeting)