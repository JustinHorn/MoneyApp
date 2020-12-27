import { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import AuthContext from 'context/AuthContext';

import { useHistory, useLocation } from 'react-router-dom';

const SignIn = () => {
  const location = useLocation();
  const history = useHistory();

  const [token, setToken] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const urlToken = queryParams.get('token');
    if (urlToken) {
      queryParams.delete('token');
      history.replace({ search: queryParams.toString() });
      setToken(urlToken);
    }
  }, [location.search]);

  useEffect(() => {
    localStorage.setItem('JWT_ID', token);
  }, [token]);

  const [user, setUser] = useState(null);

  const checkLoginStatus = () =>
    axios
      .get('http://localhost:4000/hidden', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log('res.data:');

        setUser(res.data.user);
      });

  return (
    <div>
      <h1>Login</h1>
      <a href="http://localhost:4000/auth/google"> login</a>

      <button onClick={() => checkLoginStatus()}>has locked in?</button>

      {user && <h1>Hi {user.firstName} </h1>}
    </div>
  );
};

export default SignIn;
