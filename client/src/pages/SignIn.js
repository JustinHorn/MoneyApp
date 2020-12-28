import GlobalTransactionList from 'components/transactionlist/GlobalTransactionList';

const SignIn = () => {
  return (
    <div className="">
      <a href="http://localhost:4000/auth/google">
        <h1>Login</h1>
      </a>

      <div className="justify-center">
        <GlobalTransactionList />
      </div>
    </div>
  );
};

export default SignIn;
