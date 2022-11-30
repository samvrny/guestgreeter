//grabbing the selection lists so we can get the company, guest, and greeting id's off of them
const guestOptions = document.getElementById('guest-list')
const companyOptions = document.getElementById('company-list');
const greetingOptions = document.getElementById('greeting-list');
const generateButton = document.getElementById('generate-message');

function readyPrinting() {
    console.log(guestOptions.options[guestOptions.selectedIndex].id)
    console.log(companyOptions.options[companyOptions.selectedIndex].id)
    console.log(greetingOptions.options[greetingOptions.selectedIndex].id)
}

generateButton.addEventListener('click', readyPrinting)
