const router = require("express").Router();
const apiRoutes = require('./api');
const landingPage = require('./landingPage');
const ownerHomePage = require('./ownerHomePage');

router.use("/api", apiRoutes);
router.use("/", landingPage);
router.use("/owner", ownerHomePage);
router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });

  module.exports=router

