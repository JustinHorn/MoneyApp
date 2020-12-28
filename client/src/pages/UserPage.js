import { useParams, Link, useHistory } from 'react-router-dom';
import TransactionList from 'components/transactionlist';
import useTransactionsOfUser from 'hooks/useGetTransactionsOfUser';
import { useContext, useEffect, useState } from 'react';
import AuthContext from 'context/AuthContext';

const UserPage = () => {
  const { user: loggedInUser, queryUser, sendMoney } = useContext(AuthContext);
  const { id } = useParams();

  const history = useHistory();

  const transactions = useTransactionsOfUser(id);

  const [user, setUser] = useState({});

  useEffect(() => {
    queryUser(id).then((res) => setUser(res.data));
  }, []);

  const [amount, setAmount] = useState(0);

  useEffect(() => {
    console.log(amount);
  }, [amount]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    sendMoney(user.id, amount).then((res) => {
      console.log(res);
      if (res.status === 200) {
        history.push('/');
      }
    });
  };

  return (
    <div className="justify-center">
      <Link to="/">
        <h2>Go Home</h2>
      </Link>
      <h1>{user.firstName}</h1>
      <h3>
        He has: {user.money}€; You have {loggedInUser.money}€
      </h3>

      <form method="POST" onSubmit={onSubmit}>
        <label htmlFor="#amount"></label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input type="submit" value="Send Money" />
      </form>
      <TransactionList transactionList={transactions}></TransactionList>
    </div>
  );
};

export default UserPage;
