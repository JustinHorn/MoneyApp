import logo from './logo.svg';
import './App.css';

import UserPage from 'pages/UserPage';
import SignIn from 'pages/SignIn';

import { Switch, Route, useLocation } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <SignIn></SignIn>

      {false && (
        <Switch>
          <PrivateRoute path="/" Component={UserPage}></PrivateRoute>
          <Route path="/"></Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
