const mongoose = require('mongoose');

const User = mongoose.model('User', {
  id: { type: String, required: true, index: { unique: true, dropDups: true } },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  money: { type: Number, default: 3000 },
  createdAt: { type: Date, required: true, default: Date.now },
});

const Transaction = mongoose.model('Transaction', {
  senderId: { type: String, required: true },
  receiverId: { type: String, required: true },
  amount: { type: Number, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

const sendMoney = async (userIdSender, userIdReceiver, amount) => {
  const user1 = await getUserById(userIdSender);

  const user2 = await getUserById(userIdReceiver);

  if (user1.money < amount) {
    throw new Exception(`${user1.firstName} does not have ${amount}€`);
  }

  user2.money += amount;
  user1.money -= amount;

  await user1.save();
  await user2.save();

  const message = `${user1.firstName} send ${user2.firstName} ${amount}€`;

  await new Transaction({
    senderId: user1.id,
    receiverId: user2.id,
    amount,
    message,
  }).save();

  return message;
};

const getUserById = async (id) => {
  const user = await User.findOne({ id: id });
  return { user, transactions };
};

const getUserTransActionsById = async (id) => {
  const transactions = await TransactionModel.find({
    $or: [{ senderId: id }, { receiverId: id }],
  })
    .limit(20)
    .sort('-createdAt');

  return transactions;
};

const getUsers = async () => {
  const users = await User.find({}).limit(20).sort('-createdAt');

  return users;
};

const getTransactions = async () => {
  const users = await Transaction.find({}).limit(20).sort('-createdAt');

  return users;
};

module.exports = {
  User,
  getUsers,
  getTransactions,
  getUserById,
  getUserTransActionsById,
  sendMoney,
};
