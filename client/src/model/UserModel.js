let id = 1;

function User(name, money, transactions) {
  this.id = id++;
  this.name = name;
  this.money = money;
  this.transactions = transactions;
}

export default User;
