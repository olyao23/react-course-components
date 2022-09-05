import LabelInput from "./LabelInput/LabelInput";
import Button from "./Button/Button";
import { useState } from "react";
import WelcomeBack from "../WelcomeBack/WelcomeBack";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [invalidValues, setInvalidValues] = useState(false);

  function submitForm() {
    //    za email kje vidam pokasno
    if (email === "" || password === "") {
      setInvalidValues(true);
      return;
    }
    if (password.length < 7) {
      setInvalidValues(true);
      return;
    }
  }

  return (
    <div>
      {invalidValues ? (
        <WelcomeBack />
      ) : (
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
            >
              E-Mail
            </LabelInput>
            <LabelInput
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            >
              Password
            </LabelInput>
          </div>
          <Button>Login</Button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
