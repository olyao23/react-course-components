import LabelInput from "./LabelInput/LabelInput";
import Button from "./Button/Button";
import { useState } from "react";
import WelcomeBack from "../WelcomeBack/WelcomeBack";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [checkValidEmail, setCheckValidEmail] = useState(true);
  const [checkValidPassword, setCheckValidPassword] = useState(true);

  function submitForm(e) {
    e.preventDefault();

    if (email.trim() === "") {
      setCheckValidEmail(false);
      console.log("nesho");
      return;
    }

    if (password.trim() === "" || password.trim().length < 7) {
      setCheckValidPassword(false);
      console.log("nesho");
      return;
    }

    setCheckValidEmail(true);
    setCheckValidPassword(true);
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      {/*{invalidValues ? (*/}
      {/*  <WelcomeBack />*/}
      {/*) : (*/}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "transparent",
          borderRadius: "10px",
          boxShadow: "5px 5px 5px lightgray",
          width: "500px",
          padding: "20px 0",
        }}
        onSubmit={submitForm}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "350px",
          }}
        >
          <LabelInput
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            checkValid={checkValidEmail}
          >
            E-Mail
          </LabelInput>
          <LabelInput
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            checkValid={checkValidPassword}
          >
            Password
          </LabelInput>
        </div>
        <Button>Login</Button>
      </form>
      {/*)}*/}
    </div>
  );
};

export default LoginForm;
