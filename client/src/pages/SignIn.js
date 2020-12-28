import GlobalTransactionList from 'components/transactionlist/GlobalTransactionList';

const SignIn = () => {
  return (
    <div className="">
      <p>DON'T LOGIN IF YOU DO NOT WANT ANY DATA TO BE STORED</p>

      <a href="http://localhost:4000/auth/google">
        <h1>Login with Google</h1>
      </a>
      <p>money on this app is not real</p>
      <br />
      <div className="justify-center">
        <GlobalTransactionList />
      </div>
    </div>
  );
};

export default SignIn;
