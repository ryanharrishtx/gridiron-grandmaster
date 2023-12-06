const router = require('express').Router();
const fetch = require('node-fetch');


router.get('/', async (req, res) => {
    res.render('ownerHomePage', { selectedTeams: req.session.selectedTeams || [] });
});


router.post('/', async (req, res) => {
    const selectedTeams = req.body.selectedTeams;
    // this right here saves to session
    req.session.selectedTeams = selectedTeams;
    res.render('ownerHomePage', { selectedTeams: selectedTeams });
});




module.exports = router;
