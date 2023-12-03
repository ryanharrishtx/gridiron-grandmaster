const router = require('express').Router();
const ownerRoutes = require('./ownerRoutes');
const teamRoutes = require('./teamRoutes');
const teamNames = require('./teamNames');
const teamsData = require('./ownerHomePage');

router.use('/owner', ownerRoutes);
router.use('/team', teamRoutes);
router.use('/teamnames', teamNames);
router.use('/ownerhomepage', teamsData);

module.exports = router;
