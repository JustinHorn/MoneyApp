import React, { useEffect, useState } from 'react';
import { users } from 'service/fakeData';

import { auth } from 'service/firebase';

const UserContext = React.createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
