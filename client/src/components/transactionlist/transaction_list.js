const TransactionList = ({ transactions }) => {
  return (
    <ul className="transaction-list">
      {transactions.map((t) => (
        <li>
          <span> {`${t.sender} send ${t.receiver} ${t.money}€`}</span>
        </li>
      ))}
      <li className="sendMoney">
        <span> You send X Y money</span>
      </li>
      <li className="recievedMoney">
        <span> X send you Y money</span>
      </li>
      <li className="sendMoney">
        <span> You send X Y money</span>
      </li>
      <li className="recievedMoney">
        <span> X send you Y money</span>
      </li>
      <li className="recievedMoney">
        <span> X send you Y money</span>
      </li>
    </ul>
  );
};

export default TransactionList;
