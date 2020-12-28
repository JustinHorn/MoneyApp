import useClassifyTransactions from 'hooks/useClassifyTransactions';

import './transactionlist.css';

import { Link } from 'react-router-dom';
import AuthContext from 'context/AuthContext';
import { useContext } from 'react';

const TransactionList = ({ transactionList }) => {
  const getClass = useClassifyTransactions();

  return (
    <ul className="transaction-list">
      {transactionList?.map((t) => (
        <Transaction
          key={'t' + t.createdAt}
          transaction={t}
          message={t.message}
          amount={t.amount}
        />
      ))}
    </ul>
  );
};

const Transaction = ({ transaction }) => {
  const getClass = useClassifyTransactions();

  return (
    <li className={'transaction ' + getClass(transaction)}>
      <span>
        <TransactionSenderLink transaction={transaction} />
        {' send '}
        <TransactionReceiverLink
          transaction={transaction}
        ></TransactionReceiverLink>
        {' ' + transaction.amount}€
      </span>
    </li>
  );
};

const TransactionSenderLink = ({ transaction }) => {
  const { user } = useContext(AuthContext);

  const message = transaction.message;
  let user1 = message.split('send')[0].trim();
  const isSenderThisAccount = user?.id === transaction.senderId;

  return (
    <>
      {(isSenderThisAccount && user1) ||
        (user && <Link to={'/user/' + transaction.senderId}>{user1}</Link>) ||
        user1}{' '}
    </>
  );
};

const TransactionReceiverLink = ({ transaction }) => {
  const { user } = useContext(AuthContext);

  const message = transaction.message;
  let user2 = message
    .split('send')[1]
    .replace(/\d+/g, '')
    .slice(0, -1)
    .trim()
    .trim();
  const isReceiverThisAccount = user?.id === transaction.receiverId;

  if (isReceiverThisAccount) {
    user2 = 'you';
  }

  return (
    <>
      {(isReceiverThisAccount && user2) ||
        (user && <Link to={'/user/' + transaction.receiverId}>{user2}</Link>) ||
        user2}
    </>
  );
};

export default TransactionList;
