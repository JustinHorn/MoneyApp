import AuthContext from 'context/AuthContext';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

const UserList = ({ userList }) => {
  const { user } = useContext(AuthContext);
  return (
    <ul className="userlist">
      {userList
        ?.filter((u) => u.id !== user.id)
        .map((user) => {
          return (
            <li>
              <Link to={`/user/${user.id}`}>
                <button>
                  <span> {user.firstName}</span> <span> {user.money}</span>
                </button>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default UserList;
