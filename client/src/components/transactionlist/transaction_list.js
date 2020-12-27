const TransactionList = ({ transactionList }) => {
  return (
    <ul className="transaction-list">
      {transactionList?.map((t) => (
        <li>
          <span> {t.message}</span>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
