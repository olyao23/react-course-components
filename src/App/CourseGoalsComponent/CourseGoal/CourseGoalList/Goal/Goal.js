const Goal = (props) => {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "#8b005d",
        width: "400px",
        padding: "10px 20px",
        margin: "10px",
      }}
    >
      <span>{props.text}</span>
    </div>
  );
};
export default Goal;
