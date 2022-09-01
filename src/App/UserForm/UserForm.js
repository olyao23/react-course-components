import LabelInput from "./LabelInput/LabelInput";
import Modal from "./Modal/Modal";
import { useState } from "react";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("0");

  const [error, setError] = useState();

  function checkIfValid(e) {
    e.preventDefault();

    if (username === "" && parseInt(age) < 18) {
      setError({
        message: "Please enter a valid name and age (non-empty values)",
      });

      return;
    }

    if (username === "") {
      setError({
        message: "Please enter valid username",
      });
      return;
    }

    if (parseInt(age) <= 18) {
      setError({
        message: "Please enter valid age",
      });
      return;
    }

    setUsername("");
    setAge("");
  }

  const errorFunction = () => {
    setError(null);
  };

  return (
    <>
      {error && <Modal modalInfo={error.message} onConfirm={errorFunction} />}

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          padding: "20px",
          borderRadius: "10px",
          border: "transparent",
          boxShadow: "5px 5px 5px 5px lightgray",
          backgroundColor: "lightpink",
          margin: "10px",
        }}
        onSubmit={checkIfValid}
      >
        <LabelInput
          title="Username"
          onInput={(e) => {
            setUsername(e.target.value);
          }}
        />
        <LabelInput
          title="Age (Years)"
          onInput={(e) => {
            setAge(e.target.value);
          }}
        />

        <button
          style={{
            fontSize: "14px",
            width: "100px",
            padding: "7px",
            marginTop: "7px",
            backgroundColor: "#4f005f",
            color: "white",
            border: "transparent",
            cursor: "pointer",
          }}
        >
          Add User
        </button>
      </form>
    </>
  );
};

export default UserForm;
