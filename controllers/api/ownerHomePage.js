const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    try {
        const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard');
        const data = await response.json();

        // Extracting win-loss records for each team
        const teams = data.events.reduce((acc, event) => {
            const teamsData = event.competitions[0].competitors;
            teamsData.forEach(team => {
                const teamName = team.team.displayName;
                const winLossRecord = team.records.find(record => record.type === 'total').summary;
                acc.push({ teamName, winLossRecord });
            });
            return acc;
        }, []);

        // Pass the correct variable name 'teams' to res.render
        res.render("ownerHomePage", { teams: teams });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
