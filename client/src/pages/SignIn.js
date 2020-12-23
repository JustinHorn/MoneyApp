import { signInWithGoogle } from 'service/firebase';

const SignIn = () => {
  console.log('we are on the start page');
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signInWithGoogle()}>Login with google</button>
    </div>
  );
};

export default SignIn;
