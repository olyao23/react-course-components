const LabelInput = (props) => {
  return (
    <>
      <label
        style={{
          color: "darkgray",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        {props.children}
      </label>
      <input
        style={{
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid lightgray",
          padding: "5px 7px",
        }}
        type={props.type}
      />
    </>
  );
};

export default LabelInput;
