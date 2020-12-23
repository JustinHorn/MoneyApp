import Transaction from 'model/TransactionModel';

import User from 'model/UserModel';

//...

export const transactions = [
  new Transaction(1, 3000, 2),
  new Transaction(2, 3000, 1),
  new Transaction(1, 3000, 2),
  new Transaction(2, 3000, 1),
  new Transaction(2, 3000, 1),
];

export const users = [
  new User('Justin', 3000, transactions),
  new User('Peter', 3000, transactions),
  new User('Sabine', 3000, []),
];
