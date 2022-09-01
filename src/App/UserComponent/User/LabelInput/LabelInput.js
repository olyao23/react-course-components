const LabelInput = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "5px 0",
      }}
    >
      <label
        style={{
          fontWeight: "bold",
          marginBottom: "7px",
        }}
      >
        {props.label}
      </label>
      <input
        style={{
          padding: "5px 6px",
        }}
        type="text"
        onInput={props.onInput}
        value={props.value}
      />
    </div>
  );
};

export default LabelInput;
