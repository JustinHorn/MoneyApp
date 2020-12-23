import { useContext } from 'react';

import UserContext from 'context/UserContext';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ path, Component }) => {
  const { user } = useContext(UserContext);

  if (user) {
    return (
      <Route path={path}>
        <Component />
      </Route>
    );
  } else {
    return '';
  }
};

export default PrivateRoute;
