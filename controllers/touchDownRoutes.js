const router = require("express").Router();
const { Owner, Team } = require("../models");

router.get("/", async (req, res) => {
  try {
    const teamData = await Team.findAll({
      include: [
        {
          model: Owner,
          attributes: ["name"],
        },
      ],
    });

    const teams = teamData.map((team) => team.get({ plain: true }));

    res.render("touchDown", {
      teams,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports=router