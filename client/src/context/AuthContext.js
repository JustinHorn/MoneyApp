import React, { useEffect, useState } from 'react';
import { users } from 'fakeData';

import axios from 'axios';

const AuthContext = React.createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/user/me').then((res) => {
      console.log(res.data);
    });
    console.log('axios get');
  }, []);

  const onLogin = (data) => {
    setUser(data);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, onLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
