const router = require('express').Router();
const userRoutes = require('./user-routes');
const projectRoutes = require('./team-routes');

router.use('/users', user-routes);
router.use('/projects', team-routes);

module.exports = router;
