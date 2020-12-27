const mongoose = require('mongoose');

const User = mongoose.model('User', {
  id: { type: String, required: true, index: { unique: true, dropDups: true } },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  money: { type: Number, default: 3000 },
});

const findUserById = async (id) => await User.findOne({ id: id });

module.exports = { User, findUserById };
