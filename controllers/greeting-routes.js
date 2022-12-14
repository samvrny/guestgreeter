const router = require('express').Router();
const { greetings } = require('../data/greetings.json');
const fs = require('fs');

//function to select a greetings id
function findById(id, greetingsArray) {
    const result = greetingsArray.filter(greeting => greeting.id == id)[0];
    return result
}

//get all greetings from the database
router.get('/', (req, res) => {
    const result = greetings;
    if(result) {
    res.json(result);
    } else {
        res.send(404)
    }
});

//get a greeting by its ID
router.get('/:id', (req, res) => {
    const result = findById(req.params.id, greetings);
    if(result) {
        res.json(result)
    } else {
        res.send(404)
    }
});

//write a greeting to the JSON file
function createNewGreeting(body, greetingsArray) {
    const greeting = body;
    greetingsArray.push(greeting)
    let filePath = 'data/greetings.json'
    let data = JSON.stringify({ greetings: greetingsArray })
    fs.writeFileSync(filePath, data)
}

router.post('/', (req, res) => {
    req.body.id = greetings.length + 1 || 1;
    const greeting = createNewGreeting(req.body, greetings)
    res.json(greeting);
})

module.exports = router;