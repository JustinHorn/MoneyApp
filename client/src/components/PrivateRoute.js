import { useContext } from 'react';
import { Route } from 'react-router-dom';
import AuthContext from 'context/AuthContext';
import SignIn from 'pages/SignIn';

function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        user ? (
          <RouteComponent {...routeProps} />
        ) : (
          <SignIn {...routeProps}></SignIn>
        )
      }
    />
  );
}

export default PrivateRoute;
