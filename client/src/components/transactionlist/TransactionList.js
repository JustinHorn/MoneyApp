import useClassifyTransactions from 'hooks/useClassifyTransactions';

const TransactionList = ({ transactionList }) => {
  const getClass = useClassifyTransactions();

  return (
    <ul className="transaction-list">
      {transactionList?.map((t) => (
        <li key={'t' + t.createdAt} className={getClass(t)}>
          <span> {t.message}</span>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
