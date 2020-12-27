import logo from './logo.svg';
import './App.css';

import UserPage from 'pages/UserPage';

import { Switch } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" component={UserPage}></PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
