var express = require('express');
var router = express.Router();

const { User, findUserById } = require('../model/users');

const passport = require('../passport-config');

const jwt = require('jsonwebtoken');

const cors = require('cors');

router.get(
  '/auth/google',
  cors(),
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login'],
  })
);

router.get('/hidden', getUserId, async (req, res, next) => {
  const user = await findUserById(req.userId);

  res.status(200);
  res.json({ user: user });
});

async function getUserId(req, res, next) {
  const authorization = req.headers.authorization;

  if (!authorization) {
    console.log('No authorization');
    res.status(401).json({ error: 'No authorization' });
    next('No authorization');
  }

  const onlyToken = authorization.slice(7);

  const obj = await jwt.verify(onlyToken, process.env.JWT_SECRET);

  req.userId = obj.id;

  next();
}

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  async function (req, res) {
    const id = req.user.id + '';

    console.log(req.user);

    const id_token = await jwt.sign({ id }, process.env.JWT_SECRET);

    res.redirect('http://localhost:3000/?token=' + id_token);
  }
);

module.exports = router;
