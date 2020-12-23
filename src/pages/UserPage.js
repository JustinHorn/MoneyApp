import TransactionList from 'components/transactionlist';
import UserList from 'components/userlist';

import { useContext } from 'react';

import UserContext from 'context/UserContext';

const UserPage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="UserPage">
      <h3 className="greeting">Hi {user.name}!</h3>
      <h1 className="money">
        You have <span>{user.money}€</span> to much! <br />
        Send money to others!
      </h1>

      <div className="lists">
        <div className="users">
          <UserList></UserList>
        </div>
        <div className="transactions">
          <TransactionList transactions={user.transactions}></TransactionList>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
