import TransactionList from 'components/transactionlist';
import UserList from 'components/userlist';

import { useContext, useEffect, useState } from 'react';

import UserContext from 'context/AuthContext';

import useTransactionsOfUser from 'hooks/useTransactionsOfUser';

const HomePage = () => {
  const { user, getUsers, logout } = useContext(UserContext);

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers().then((users) => setUserList(users));
  }, []);

  const transactionList = useTransactionsOfUser(user.id);
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
          <UserList userList={userList}></UserList>
        </div>
        <div className="transactions">
          <TransactionList transactionList={transactionList}></TransactionList>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
