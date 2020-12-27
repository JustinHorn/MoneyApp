const TransactionList = ({ transactionList }) => {
  return (
    <ul className="transaction-list">
      {transactionList?.map((t) => (
        <li key={'t' + t.createdAt}>
          <span> {t.message}</span>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
