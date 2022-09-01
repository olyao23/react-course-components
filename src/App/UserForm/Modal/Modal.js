const Modal = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "transparent",
          width: "400px",
          borderRadius: "10px",
          backgroundColor: "#4f005f",
          margin: "0",
          color: "white",
          boxShadow: "5px 5px 5px 5px darkgray",
        }}
      >
        <h3
          style={{
            margin: "0",
            color: "white",
            borderRadius: "10px 10px 0 0 ",
            padding: "13px",
            fontWeight: "bold",
          }}
        >
          Invalid Input
        </h3>
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "15px",
            borderRadius: "0 0 10px 10px",
          }}
        >
          <p
            style={{
              padding: "0 0 20px 0",
            }}
          >
            {props.modalInfo}
          </p>

          <button
            style={{
              backgroundColor: "#4f005f",
              color: "white",
              padding: "7px 15px",
              border: "transparent",
              cursor: "pointer",
            }}
            onClick={props.onConfirm}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
