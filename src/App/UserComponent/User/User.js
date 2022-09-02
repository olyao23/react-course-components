import LabelInput from "./LabelInput/LabelInput";
import Button from "./Button/Button";
import { useState } from "react";
import Modal from "../Modal/Modal";

const User = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  function addUser(e) {
    e.preventDefault();

    if (username === "" && age === "") {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (username === "") {
      setError({
        title: "Invalid username",
        message: "Please enter a valid username",
      });
      return;
    }

    if (age === "" || parseInt(age) < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }

    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

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
    </div>
  );
};

export default User;
