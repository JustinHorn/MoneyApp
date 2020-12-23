import { transactions } from 'fakeData';

function User(name, money) {
  this.name = name;
  this.money = money;
  this.transactions = transactions;
}

export default User;
