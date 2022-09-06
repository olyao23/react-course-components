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
          padding: "5px 7px",
          border: props.checkValid ? "1px solid lightgray" : "1px solid red",
        }}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
};

export default LabelInput;
