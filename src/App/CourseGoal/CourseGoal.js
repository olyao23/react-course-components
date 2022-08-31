import { useState } from "react";

//treba da dodavam ama nez kako taka da kje treba da vidam

const CourseGoal = () => {
  const [goal, setGoal] = useState("");

  function addGoal(e) {
    e.preventDefault();
    console.log(goal);
  }

  return (
    <form
      style={{
        width: "400px",
        display: "flex",
        flexDirection: "column",
        padding: "25px 35px",
        border: "transparent",
        borderRadius: "10px",
        boxShadow: "5px 5px 5px 4px lightgray",
        margin: "10px",
      }}
    >
      <label
        style={{
          fontWeight: "bold",
          color: goal.length === 0 ? "red" : "black",
        }}
      >
        Course Goal
      </label>

      <input
        style={{
          padding: "8px 9px",
          margin: "8px 0",
          border: goal.length === 0 ? "2px solid red" : "2px solid #8b005d",
          backgroundColor: goal.length === 0 ? "#ffd7d7" : "#fad0ec",
        }}
        type="text"
        onInput={(e) => {
          setGoal(e.target.value);
        }}
      />
      <button
        style={{
          color: "white",
          backgroundColor: "#8b005d",
          border: "transparent",
          padding: "9px",
          width: "120px",
          cursor: "pointer",
          fontSize: "15px",
        }}
        onClick={addGoal}
      >
        Add Goal
      </button>
    </form>
  );
};

export default CourseGoal;
