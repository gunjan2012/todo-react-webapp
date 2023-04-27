import TaskList from "./TaskList";

function Tasks({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((item) => (
        <TaskList key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Tasks;
