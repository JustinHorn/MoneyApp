var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');

const passport = require('../passport-config');

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login'],
  })
);

const { JWT_SECRET, CLIENT_HOST, CLIENT_PORT } = process.env;

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  async function (req, res) {
    const id = req.user.id + '';

    const id_token = await jwt.sign({ id }, JWT_SECRET);

    res.redirect(`${CLIENT_HOST}:${CLIENT_PORT}/?token=` + id_token);
  }
);

module.exports = router;
