import User from "./User/User";
import UsersList from "./UsersList/UsersList";
import { useState } from "react";

const UserComponent = () => {
  const [initialUsersList, setInitialUsersList] = useState([]);

  function addUser(uUsername, uAge) {
    if (uUsername === "" || uAge === "") {
      return;
    }

    setInitialUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random(), name: uUsername, age: uAge },
      ];
    });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <User onAddUser={addUser} />
      <UsersList usersList={initialUsersList} />
    </div>
  );
};

export default UserComponent;
