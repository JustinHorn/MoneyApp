import logo from './logo.svg';
import './App.css';

import HomePage from 'pages/HomePage';
import UserPage from 'pages/UserPage';

import { Switch } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/user/:id" component={UserPage}></PrivateRoute>
        <PrivateRoute path="/" component={HomePage}></PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
