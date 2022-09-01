import { useState } from "react";
import User from "./UserComponent/User/User";
import UserComponent from "./UserComponent/UserComponent";
import CourseGoalComponent from "./CourseGoalsComponent/CourseGoalComponent";
import UserForm from "./UserForm/UserForm";

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

      {showCourseGoal ? (
        <CourseGoalComponent />
      ) : (
        <div
          style={{
            backgroundColor: "lightpink",
          }}
        >
          <UserComponent />
        </div>
      )}
      {/*  treba namesto null <UserForm/> ama ne raboti sega za sega*/}
    </>
  );
};

export default App;
