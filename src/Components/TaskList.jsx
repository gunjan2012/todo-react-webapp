import grayCircle from "../assets/Grey-circle.png";
import greenSign from "../assets/Green-circle.ico";

const TaskList = ({ item }) => {
  const textStyle = {
    opacity: item.isDone ? 0.3 : 1,
  };

  const IconOpacity = {
    opacity: item.isDone ? 1 : 0.3,
  };

  return (
    <div className="d-flex align-items-center py-2">
      <span className="task" style={textStyle}>
        {item.text}
      </span>
      <img
        className="task-sign"
        style={IconOpacity}
        src={item.isDone ? greenSign : grayCircle}
        width={35}
      />
    </div>
  );
};

export default TaskList;
