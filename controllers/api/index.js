const router = require('express').Router();
const ownerRoutes = require('./ownerRoutes');
const teamRoutes = require('./teamRoutes');
const teamNames = require('./teamNames');


router.use('/owner', ownerRoutes);
router.use('/team', teamRoutes);
router.use('/teamnames', teamNames);


module.exports = router;
