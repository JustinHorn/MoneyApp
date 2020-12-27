const UserList = ({ userList }) => {
  return (
    <ul className="userlist">
      {userList?.map((user) => {
        return (
          <li>
            <button>
              <span> {user.firstName}</span> <span> {user.money}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
