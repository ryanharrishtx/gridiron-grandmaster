const router = require('express').Router();
const ownerRoutes = require('./ownerRoutes');
const teamRoutes = require('./teamRoutes');
const teamNames = require('./teamNames');
const winLoss = require('./winLoss');


router.use('/owner', ownerRoutes);
router.use('/team', teamRoutes);
router.use('/teamnames', teamNames);
router.use('/winloss', winLoss);


module.exports = router;
