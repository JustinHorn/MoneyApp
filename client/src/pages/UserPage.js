import TransactionList from 'components/transactionlist';
import UserList from 'components/userlist';

import { useContext, useEffect, useState } from 'react';

import UserContext from 'context/AuthContext';

import api from 'axios';

const UserPage = () => {
  const { user, getUsers } = useContext(UserContext);

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers().then((users) => setUserList(users));
  }, []);

  return (
    <div className="UserPage">
      <h3 className="greeting">Hi {user.firstName}!</h3>
      <h1 className="money">
        You have <span>{user.money}€</span> to much! <br />
        Send money to others!
      </h1>

      <div className="lists">
        <div className="users">
          <UserList userList={userList}></UserList>
        </div>
        <div className="transactions">
          <TransactionList transactions={[]}></TransactionList>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
