import LabelInput from "./LabelInput/LabelInput";
import Button from "./Button/Button";

const LoginForm = () => {
  return (
    <div
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
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "350px",
        }}
      >
        <LabelInput type="email">E-Mail</LabelInput>
        <LabelInput type="password">Password</LabelInput>
      </div>
      <Button>Login</Button>
    </div>
  );
};

export default LoginForm;
