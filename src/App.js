import logo from './logo.svg';
import './App.css';

function App() {
  const money = 3000;
  return (
    <div className="App">
      <h3 className="greeting">Hi Justin!</h3>
      <h1 className="money">
        You have <span>{money}€</span> to much! <br />
        Send money to others!
      </h1>

      <div className="lists">
        <div className="users">
          <ul className="userlist">
            <li>
              <button>
                <span> Name1</span> <span> Money</span>
              </button>
            </li>
            <li>
              <button>
                <span> Name2</span> <span> Money</span>
              </button>
            </li>
            <li>
              <button>
                <span> Name3</span> <span> Money</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="transactions">
          <ul className="transaction-list">
            <li className="sendMoney">
              <span> You send X Y money</span>
            </li>
            <li className="recievedMoney">
              <span> X send you Y money</span>
            </li>
            <li className="sendMoney">
              <span> You send X Y money</span>
            </li>
            <li className="recievedMoney">
              <span> X send you Y money</span>
            </li>
            <li className="recievedMoney">
              <span> X send you Y money</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
