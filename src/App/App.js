import { useState } from "react";
import User from "./UserComponent/User/User";
import UserComponent from "./UserComponent/UserComponent";
import CourseGoalComponent from "./CourseGoalsComponent/CourseGoalComponent";
import UserForm from "./UserForm/UserForm";
import TypicalPage from "./TypicalPage/TypicalPage";
import LoginForm from "./TypicalPage/LoginForm/LoginForm";

const App = () => {
  const [showCourseGoal, setShowCourseGoal] = useState(false);

  return (
    <>
      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    setShowCourseGoal(true);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Course Goal*/}
      {/*</button>*/}
      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    setShowCourseGoal(false);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  User*/}
      {/*</button>*/}

      {/*{showCourseGoal ? (*/}
      {/*  <CourseGoalComponent />*/}
      {/*) : (*/}
      {/*  <div*/}
      {/*    style={{*/}
      {/*      backgroundColor: "lightpink",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <UserComponent />*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*  treba namesto null <UserForm/> ama ne raboti sega za sega*/}

      {/*    za da se prikaze samo A Typical Page sega za sega*/}
      <TypicalPage />
      {/*    sega za sega, inache treba da prikaze A Typical Page*/}
    </>
  );
};

export default App;
