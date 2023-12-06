const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const response = await fetch(
      "https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams"
    );
    const data = await response.json();

    const teams = data.sports[0].leagues[0].teams;

    // Extract team names and logos
    const teamInfo = teams.map((team) => {
      const displayName = team.team.displayName || team.displayName;
      const logo = team.team.logos[0]?.href || team.logos[0]?.href || null;
      return { displayName, logo };
    });

    //console.log(teamInfo);

    // fetch win/loss data
    const winLossRespone = await fetch(
      "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"
    );
    const winLossData = await winLossRespone.json();
    console.log(winLossData.events[0].competitions[0].competitors[0].records);
    const record = winLossData.events[0].competitions[0].competitors[0].records;
    console.log(record);

    res.render("teamNames", { teamInfo });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
