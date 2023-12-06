const router = require('express').Router();


router.get('/', async (req, res) => {

    try {
        const winLossRespone = await fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard');
        const winLossData = await winLossRespone.json();
        console.log(winLossData);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }



});




module.exports = router;
