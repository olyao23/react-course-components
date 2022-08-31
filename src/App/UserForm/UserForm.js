import LabelInput from "./LabelInput/LabelInput";
import Modal from "./Modal/Modal";
import { useState } from "react";

//ushe eden proekt, 4ti, kaj useEffect()

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  const [addUserClicked, setAddUserClicked] = useState(false);

  return (
    <>
      {addUserClicked ? (
        <>
          {username === "" ||
            age <= 0 ||
            age >= 90 ||
            (age > 90 && (
              <Modal modalInfo="Please enter a valid name and age (non-empty values)." />
            ))}
          <div
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
              onClick={() => {
                setAddUserClicked(true);
              }}
            >
              Add User
            </button>
          </div>
        </>
      ) : (
        <h2></h2>
        // <div
        //   style={{
        //     display: "flex",
        //     flexDirection: "column",
        //     width: "400px",
        //     padding: "20px",
        //     borderRadius: "10px",
        //     border: "transparent",
        //     boxShadow: "5px 5px 5px 5px lightgray",
        //     backgroundColor: "lightpink",
        //     margin: "10px",
        //   }}
        // >
        //   <LabelInput
        //     title="Username"
        //     onInput={(e) => {
        //       setUsername(e.target.value);
        //     }}
        //   />
        //   <LabelInput
        //     title="Age (Years)"
        //     onInput={(e) => {
        //       setAge(e.target.value);
        //     }}
        //   />
        //
        //   <button
        //     style={{
        //       fontSize: "14px",
        //       width: "100px",
        //       padding: "7px",
        //       marginTop: "7px",
        //       backgroundColor: "#4f005f",
        //       color: "white",
        //       border: "transparent",
        //       cursor: "pointer",
        //     }}
        //     onClick={() => {
        //       setAddUserClicked(true);
        //     }}
        //   >
        //     Add User
        //   </button>
        // </div>
      )}
    </>
  );
};

export default UserForm;
////
// {username === "" && age >= 0 && age <= 90 && (
//     <Modal modalInfo="Please enter a valid username" />
// )}
// {(username !== "" && age <= 0) ||
// (age > 90 && <Modal modalInfo="Please enter valid age" />)}
