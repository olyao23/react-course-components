import { useState } from "react";
import CourseGoal from "./CourseGoal/CourseGoal";
import User from "./UserForm/UserForm";

const App = () => {
  const [showCourseGoal, setShowCourseGoal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShowCourseGoal(true);
        }}
      >
        Course Goal
      </button>
      <button
        onClick={() => {
          setShowCourseGoal(false);
        }}
      >
        User
      </button>

      {showCourseGoal ? <CourseGoal /> : <User />}
    </>
  );
};

export default App;
