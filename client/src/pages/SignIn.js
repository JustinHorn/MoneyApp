import { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import AuthContext from 'context/AuthContext';

import { useHistory, useLocation } from 'react-router-dom';

const SignIn = () => {
  const location = useLocation();
  const history = useHistory();

  const [token, setToken] = useState('');

  useEffect(() => {
    console.log('location has changed!');
    const queryParams = new URLSearchParams(location.search);
    const urlToken = queryParams.get('token');
    if (urlToken) {
      queryParams.delete('token');
      history.replace({ search: queryParams.toString() });
      setToken(urlToken);
    }
  }, [location.search]);

  useEffect(() => {
    localStorage.setItem('passport_token', token);
  }, [token]);

  const checkLoginStatus = () =>
    axios
      .get('http://localhost:4000/user/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log('res.data:');

        console.log(res.data);
      });

  return (
    <div>
      <h1>Login</h1>
      <a href="http://localhost:4000/auth/google"> login</a>

      <button onClick={() => checkLoginStatus()}>has locked in?</button>
    </div>
  );
};

export default SignIn;
