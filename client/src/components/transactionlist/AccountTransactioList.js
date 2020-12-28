import AuthContext from 'context/AuthContext';
import { useContext } from 'react';

import UserTransactionList from './UserTransactionList';

const AccountTransactionList = () => {
  const {
    user: { id },
  } = useContext(AuthContext);

  return <UserTransactionList id={id} />;
};

export default AccountTransactionList;
