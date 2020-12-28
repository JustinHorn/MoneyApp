import React, { useEffect, useState } from 'react';
import useAuthToken from 'hooks/useAuthToken';
import axios from 'axios';

const AuthContext = React.createContext({});
const baseURL = process.env.REACT_APP_API_BASEURL;
let api = axios.create({ baseURL });

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useAuthToken();

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      getAccountData();
    }
  }, [token]);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getAccountData = async () => {
    const { data } = await api.get('/user/me', {
      headers,
    });
    setUser(data);
  };

  const logout = () => {
    setToken('');
    setUser(null);
  };

  const getUsers = async () => {
    const res = await api.get('/users', {
      headers,
    });
    return res.data;
  };

  const getTransactions = async () => {
    const res = await api.get(`/user/${user.id}/transactions`, {
      headers,
    });
    return res.data;
  };

  const queryUserTransActions = (id) =>
    api.get(`/user/transactions/${id}`, {
      headers,
    });

  const queryUser = (id) =>
    api.get(`/user/${id}`, {
      headers,
    });

  const sendMoney = (receiverId, amount) =>
    api.post(
      `/transaction`,
      {
        receiverId,
        amount,
      },
      {
        headers,
      }
    );

  return (
    <AuthContext.Provider
      value={{
        user,
        getAccountData,
        setUser,
        getUsers,
        getTransactions,
        queryUserTransActions,
        queryUser,
        logout,
        sendMoney,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
