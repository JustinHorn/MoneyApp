import logo from './logo.svg';
import './App.css';

import { useContext } from 'react';

import User from 'model/user_model';
import UserContext from 'context/user_context';

import UserPage from 'pages/user_page';

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      user
      {user && <UserPage user={user} />}
    </div>
  );
}

export default App;
