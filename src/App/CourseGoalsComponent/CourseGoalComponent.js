import CourseGoalList from "./CourseGoal/CourseGoalList/CourseGoalList";
import { useState } from "react";
import CourseGoal from "./CourseGoal/CourseGoal";

const CourseGoalComponent = () => {
  const goalList = [
    { id: 1, text: "Do all exercises!" },
    { id: 2, text: "Finish the course!" },
  ];

  const [initialGoalList, setInitialGoalList] = useState(goalList);

  function addGoal(enteredText) {
    if (enteredText === "") {
      return;
    }
    setInitialGoalList((prevGoalList) => {
      return [...prevGoalList, { id: Math.random(), text: enteredText }];
    });
  }

  return (
    <div>
      <CourseGoal onAddGoal={addGoal} />
      <CourseGoalList goalList={initialGoalList} />

      {/*<div>{content}</div>*/}
    </div>
  );
};
export default CourseGoalComponent;
