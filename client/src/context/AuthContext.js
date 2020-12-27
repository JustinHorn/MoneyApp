import React, { useEffect, useState } from 'react';
import useAuthToken from 'hooks/useAuthToken';

import api from 'helper/axios';

const AuthContext = React.createContext({});

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useAuthToken();

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      checkLoginStatus();
    }
  }, [token]);

  const checkLoginStatus = () => {
    api
      .get('/user/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      });
  };

  const logout = () => {
    setToken('');
    setUser(null);
  };

  const getUsers = async () => {
    const res = await api.get('/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    return res.data;
  };

  return (
    <AuthContext.Provider value={{ user, setUser, getUsers }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
