const router = require('express').Router();
// const { Owner } = require('../../models');

router.get('/', async (req, res) => {
try {
    const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams');
    const data = await response.json();
    const teams = data.sports[0].leagues[0].teams
    console.log(teams);

    const logos = teams.map(team => team.team.logos[0].href);
    console.log(logos);

    res.render("teamNames", {teams: teams, logos: logos});
} catch (err) {
    res.status(500).json(err);
}
});

module.exports = router;