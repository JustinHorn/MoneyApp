import logo from './logo.svg';
import './App.css';

import UserPage from 'pages/UserPage';

import { Switch, Route, useLocation } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" Component={UserPage}></PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
