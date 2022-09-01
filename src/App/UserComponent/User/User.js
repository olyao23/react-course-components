import LabelInput from "./LabelInput/LabelInput";
import Button from "./Button/Button";
import { useState } from "react";

const User = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  function addUser(e) {
    e.preventDefault();

    if (username === "" && parseInt(age) < 1) {
      return;
    }

    if (username === "") {
      return;
    }

    if (parseInt(age) < 1) {
      return;
    }

    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        padding: "20px",
        borderRadius: "10px",
        border: "transparent",
        boxShadow: "5px 5px 5px 5px lightgray",
        backgroundColor: "white",
        margin: "100px 10px 50px 10px",
      }}
      onSubmit={addUser}
    >
      <LabelInput
        label="Username"
        onInput={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
      />
      <LabelInput
        label="Age (Years)"
        onInput={(e) => {
          setAge(e.target.value);
        }}
        value={age}
      />

      <Button>Add User</Button>
    </form>
  );
};

export default User;
