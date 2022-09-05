import Button from "../LoginForm/Button/Button";

const WelcomeBack = () => {
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
      <h3
        style={{
          fontSize: "24px",
        }}
      >
        Welcome back!
      </h3>
      <Button>Logout</Button>
    </div>
  );
};

export default WelcomeBack;
