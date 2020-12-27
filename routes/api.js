var express = require('express');
var router = express.Router();

const {
  getUsers,
  getTransactions,
  getUserById,
  getUserTransActionsById,
  sendMoney,
} = require('../model/users');

router.get('/transactions', async (req, res, next) => {
  try {
    const transactions = await getTransactions();

    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).send(err);
  }
});

const getUserIdFromHeaders = require('./checkToken');

router.use(getUserIdFromHeaders);

router.get('/user/me', async (req, res, next) => {
  try {
    const data = await getUserById(req.userId);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/user/:id', async (req, res, next) => {
  try {
    const data = await getUserById(req.params.id);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get(
  '/user/:id/transactions',

  async (req, res, next) => {
    try {
      const data = await getUserTransActionsById(req.params.id);

      res.status(200).json(data);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

router.get('/users', async (req, res, next) => {
  try {
    const users = await getUsers();

    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/transaction', async (req, res, next) => {
  try {
    const message = await sendMoney(
      req.userId,
      req.body.receiverId,
      req.body.amount
    );

    res.send(message);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
