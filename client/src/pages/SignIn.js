import { useContext, useEffect, useState } from 'react';

import TransactionList from 'components/transactionlist';

import api from 'helper/axios';

const SignIn = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get('/transactions').then((res) => {
      setTransactions(res.data);
      console.log('transaction data:');
      console.log(res.data);
    });
  }, []);

  return (
    <div className="">
      <a href="http://localhost:4000/auth/google">
        <h1>Login</h1>
      </a>

      <div className="justify-center">
        <TransactionList transactionList={transactions}></TransactionList>
      </div>
    </div>
  );
};

export default SignIn;
