const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams');
    const data = await response.json();
    console.log(data); // Log the API response for reference

    // Check if the necessary properties exist
    if (!data || !data.sports || !data.sports[0] || !data.sports[0].leagues || !data.sports[0].leagues[0] || !data.sports[0].leagues[0].teams) {
      throw new Error('Invalid API response structure');
    }

    const teams = data.sports[0].leagues[0].teams;

    // Add additional logging
    console.log('Teams:', teams);

    // Extract team names and logos
    const teamInfo = teams.map(team => ({
      displayName: team.team.displayName || 'Unknown Team', // Use the correct property for team name
      logo: team.team.logos[0]?.href || null, // Use the correct property for team logo
    }));

    console.log(teamInfo);

    const teamNames = teamInfo.map(team => team.displayName);
    const logos = teamInfo.map(team => team.logo);

    console.log(teamNames);
    console.log(logos);

    res.render("teamNames", { teams: teamNames, logos: logos });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
