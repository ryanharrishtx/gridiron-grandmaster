const router = require('express').Router();
const { Team } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newTeam = await Team.create(req.body);
    console.log(newTeam, "========================")
    if (req.body.teamId && req.body.teamId.length) {
      const teamIdArr = req.body.teamId.map((team_id) => {
        return {
          team_id,
          owner_id: req.session.owner_id,
        };
      });
      await Team.bulkCreate(teamIdArr);
      console.log(teamIdArr, "========================")
    } else {
      res.status(200).json(newTeam);
      return;
    }
    const teamArray = await OwnedTeams.findAll({
      where: {
        team_id: newTeam.id
      },
    });
    
    console.log(teamArray, "========================")
    res.status(200).json(teamArray);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.get('/all', async (req, res) => {
  try {
    const teamData = await Team.findAll();
    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const teamData = await Team.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!teamData) {
      res.status(404).json({ message: 'No team found with this id!' });
      return;
    }

    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
