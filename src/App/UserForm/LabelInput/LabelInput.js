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
        {props.title}
      </label>
      <input
        type="text"
        style={{
          padding: "5px 6px",
        }}
        onInput={props.onInput}
      />
    </div>
  );
};

export default LabelInput;
