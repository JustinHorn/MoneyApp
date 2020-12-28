import { useEffect, useState } from 'react';
import TransactionList from './TransactionList';

import api from 'helper/axios';

const GlobalTransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get('/transactions').then((res) => {
      setTransactions(res.data);
    });
  }, []);

  return <TransactionList transactionList={transactions}></TransactionList>;
};

export default GlobalTransactionList;
