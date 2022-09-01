import Goal from "./Goal/Goal";

const CourseGoalList = (props) => {
  return (
    <div>
      {props.goalList.map((goal) => {
        return <Goal key={goal.id} text={goal.text} />;
      })}
    </div>
  );
};

export default CourseGoalList;
