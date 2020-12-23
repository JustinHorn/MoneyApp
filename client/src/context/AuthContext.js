import React, { useEffect, useState } from 'react';
import { users } from 'fakeData';

import { firebaseInit, auth } from 'service/firebase';

firebaseInit();

const AuthContext = React.createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      console.log(user);
      console.log(user.providerId);

      console.log(user.uid);

      console.log(user.displayName);
      console.log(user.email);
      console.log(user.tenantId);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
