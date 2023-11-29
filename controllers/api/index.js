const router = require('express').Router();
const ownerRoutes = require('./ownerRoutes');
const teamRoutes = require('./teamRoutes');

router.use('/owner', ownerRoutes);
router.use('/team', teamRoutes);

module.exports = router;
