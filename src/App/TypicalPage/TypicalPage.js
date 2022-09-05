import LoginForm from "./LoginForm/LoginForm";
import PageHeader from "./PageHeader/PageHeader";
import WelcomeBack from "./WelcomeBack/WelcomeBack";

const TypicalPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PageHeader />
      <LoginForm />
      {/*<WelcomeBack />*/}

      {/*    moze kje treba da napravam div so style da
    bide eden component, pa vo razlichna situacija so &&
    check ili so ternary operator da se prikaze ili forma
    ili welcome back*/}
    </div>
  );
};

export default TypicalPage;
