const router = require('express').Router();
const { greetings } = require('../data/greetings.json');

//function to select a greetings id
function findById(id, greetingssArray) {
    const result = greetingssArray.filter(greeting => greeting.id == id)[0];
    return result
}

//get all greetings from the database
router.get('/', (req, res) => {
    const result = greetings;
    res.json(result);
});

router.get('/:id', (req, res) => {
    const result = findById(req.params.id, greetings);
    if(result) {
        res.json(result)
    } else {
        //send back a 404
        console.log('Failure')
    }
});

module.exports = router;