import logo from './logo.svg';
import './App.css';

import UserPage from 'pages/UserPage';

import { Switch, Route } from 'react-router-dom';

import PrivateRoute from 'components/privateroute';

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" Component={UserPage}></PrivateRoute>
        <Route path="/">
          <h1>Login!</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
