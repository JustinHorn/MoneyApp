import useGetTransactionsOfUser from 'hooks/useGetTransactionsOfUser';
import TransactionList from './TransactionList';

const UserTransactionList = ({ id }) => {
  const transactionList = useGetTransactionsOfUser(id);

  return <TransactionList transactionList={transactionList}></TransactionList>;
};

export default UserTransactionList;
