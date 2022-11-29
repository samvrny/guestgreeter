const router = require('express').Router();
const guestRoutes = require('./guest-routes');
const companyRoutes = require('./company-routes');
const greetingRoutes = require('./greeting-routes');

router.use('/guests', guestRoutes);
router.use('/company', companyRoutes);
//router.use('/greeting', greetingRoutes);

module.exports = router;
