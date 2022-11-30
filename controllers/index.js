//import all the API routes for the guests, companies, and greetings
const router = require('express').Router();
const guestRoutes = require('./guest-routes');
const companyRoutes = require('./company-routes');
const greetingRoutes = require('./greeting-routes');

//set the path to use with each of the API routes
router.use('/guests', guestRoutes);
router.use('/company', companyRoutes);
router.use('/greeting', greetingRoutes);

module.exports = router;
