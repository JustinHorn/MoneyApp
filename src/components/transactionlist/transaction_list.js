const TransactionList = ({ transactions }) => {
  return (
    <ul className="transaction-list">
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
