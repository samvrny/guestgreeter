const router = require('express').Router();
const { companies } = require('../data/companies.json');

//function to select a companies id
function findById(id, companiesArray) {
    const result = companiesArray.filter(company => company.id == id)[0];
    return result
}

//get all companies from the database
router.get('/', (req, res) => {
    const result = companies;
    res.json(result);
});

router.get('/:id', (req, res) => {
    const result = findById(req.params.id, companies);
    if(result) {
        res.json(result)
    } else {
        res.send(404);
    }
});

module.exports = router;