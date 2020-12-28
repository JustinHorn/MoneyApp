import AuthContext from 'context/AuthContext';
import { useContext, useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

const UserList = () => {
  const { user, getUsers } = useContext(AuthContext);

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers().then((users) => setUserList(users));
  });

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
