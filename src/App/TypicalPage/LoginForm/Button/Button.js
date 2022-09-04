const Button = (props) => {
  return (
    <button
      type="submit"
      style={{
        color: "white",
        backgroundColor: "#4f005f",
        border: "transparent",
        borderRadius: "25px",
        cursor: "pointer",
        padding: "11px 40px",
        margin: "20px 0",
        //  sega za sega ovaa boja, treba na github da ja
        //  najdam drugata
      }}
    >
      {props.children}
    </button>
    //    da stavam i onClick event
  );
};

export default Button;
