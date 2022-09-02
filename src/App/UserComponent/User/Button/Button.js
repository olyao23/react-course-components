const Button = (props) => {
  return (
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
      type="submit"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
