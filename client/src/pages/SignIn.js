import { useContext, useEffect, useState } from 'react';

import axios from 'axios';

import TransactionList from 'components/transactionlist';

const api = axios.create({ baseURL: 'http://localhost:4000/api' });

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
        <TransactionList transactions={transactions}></TransactionList>
      </div>
    </div>
  );
};

export default SignIn;
