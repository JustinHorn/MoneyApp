import React, { useEffect, useState } from 'react';
import useAuthToken from 'hooks/useAuthToken';

import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:4000/api' });

const AuthContext = React.createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useAuthToken();

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      checkLoginStatus();
    }
  }, [token]);

  const checkLoginStatus = () =>
    api
      .get('/user/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      });

  const logout = () => {
    setToken('');
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
