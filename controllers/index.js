const router = require("express").Router();
const apiRoutes = require('./api');
const touchDownRoutes = require('./touchDownRoutes');

router.use("/api", apiRoutes);
router.use("/", touchDownRoutes);
router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });

  module.exports=router

