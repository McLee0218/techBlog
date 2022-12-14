const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/gotodashboard', dashboardRoutes);
router.use('/gotoapi', apiRoutes);

module.exports = router;