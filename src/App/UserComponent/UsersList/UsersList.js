const UsersList = (props) => {
  return (
    <ul>
      {props.usersList.map((user) => {
        return (
          <li
            style={{
              listStyleType: "none",
              color: "white",
              margin: "20px 0",
              backgroundColor: "#4f005f",
              border: "transparent",
              padding: "10px 20px",
              width: "300px",
            }}
            key={user.id}
          >
            Username: {user.name}, Age: {user.age}
          </li>
        );
      })}
    </ul>
  );
};

export default UsersList;
