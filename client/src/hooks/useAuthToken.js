import { useHistory, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

const useAuthToken = () => {
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
    const localToken = localStorage.getItem('JWT_ID');

    if (localToken) {
      console.log('set new token');

      setToken(localToken);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('JWT_ID', token);
  }, [token]);

  return [token, setToken];
};

export default useAuthToken;
