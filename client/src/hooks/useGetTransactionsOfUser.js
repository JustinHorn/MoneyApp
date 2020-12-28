import React, { useEffect, useState, useContext } from 'react';

import AuthContext from 'context/AuthContext';

const useGetTransactionsOfUser = (id) => {
  const { queryUserTransActions } = useContext(AuthContext);

  const [transactionList, setTransactionList] = useState([]);
  useEffect(async () => {
    const res = await queryUserTransActions(id);

    setTransactionList(res.data);
  }, []);

  return transactionList;
};

export default useGetTransactionsOfUser;
