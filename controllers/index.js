const router = require("express").Router();
const apiRoutes = require('./api');
const landingPage = require('./landingPage');

router.use("/api", apiRoutes);
router.use("/", landingPage);
router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });

  module.exports=router

