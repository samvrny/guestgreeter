const router = require('express').Router();
const { guests } = require('../data/guests.json');

//function to select a guests id
function findById(id, guestsArray) {
    const result = guestsArray.filter(guest => guest.id == id)[0];
    return result
}

//get all guests from the database
router.get('/', (req, res) => {
    const result = guests;
    res.json(result);
});

router.get('/:id', (req, res) => {
    const result = findById(req.params.id, guests);
    if(result) {
        res.json(result)
    } else {
        console.log('Failure')
    }
});

module.exports = router;