const TransactionList = ({ transactions }) => {
  return (
    <ul className="transaction-list">
      {transactions?.map((t) => (
        <li>
          <span> {t.message}</span>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
