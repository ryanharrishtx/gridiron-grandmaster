
const router = require("express").Router();
const apiRoutes = require('./api');
const touchDownRoutes = require('./touchDownRoutes');

router.use("/api", apiRoutes);
router.use("/", touchDownRoutes);
router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });

  module.exports=router

const fetchMyData = async () => {
    const response = await fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
    const data = await response.json()
    const teams = data.sports[0].leagues[0].teams
    const teamNames = teams.map(team => team.team.displayName)
    console.log(data)
}

fetchMyData();

