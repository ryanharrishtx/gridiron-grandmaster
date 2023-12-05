const router = require("express").Router();
const { Owner, Team } = require("../models");

router.get("/", async (req, res) => {
  try {
    res.render("landingPage", {
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    } else {
      res.render("login", {
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports=router