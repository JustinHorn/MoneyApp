var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');

const users = require('../model/users');

/* GET home page. */
router.get('/', checkAuthentication, function (req, res, next) {
  res.render('index', { name: req.user ? req.user.name : '' });
});

router.get('/login', function (req, res, next) {
  res.render('login', {});
});

const passport = require('../passport-config');

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
  })
);

router
  .get('/register', function (req, res, next) {
    res.render('register', { text: '' });
  })
  .post('/register', async function (req, res, next) {
    try {
      req.body.email;
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      res.redirect('/login');
    } catch {
      res.redirect('/register');
    }
    console.log(users);
  });

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = router;