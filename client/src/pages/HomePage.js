import TransactionList from 'components/transactionlist';
import UserList from 'components/userlist';

import { useContext, useEffect, useState } from 'react';

import UserContext from 'context/AuthContext';

import AccountTransactionList from 'components/transactionlist/AccountTransactioList';

const HomePage = () => {
  const { user, logout, getAccountData } = useContext(UserContext);

  useEffect(() => {
    getAccountData();
  }, []);

  return (
    <div className="HomePage">
      <div className="greeting">
        <h3 className="">Hi {user.firstName}!</h3>

        <button onClick={logout}>Logout</button>
      </div>
      <h1 className="money">
        You have <span>{user.money}€</span> to much! <br />
        Send money to others!
      </h1>

      <div className="lists">
        <div className="users">
          <UserList />
        </div>
        <div className="transactions">
          <AccountTransactionList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
